#!/usr/bin/env node
/**
 * generate-ontology-docs.js
 *
 * Reads the UNTP core ontology (untp-ontology.jsonld) and generates the
 * auto-generated section of CoreVocabulary.md.
 *
 * The generated content is placed between marker comments:
 *   <!-- GENERATED:BEGIN ontology -->
 *   <!-- GENERATED:END ontology -->
 *
 * All content outside the markers is preserved, allowing hand-written
 * context, diagrams, and explanatory text to coexist with the generated
 * reference tables.
 *
 * If the output file does not exist or contains no markers, a bootstrap
 * page is created with the markers wrapping the generated content.
 *
 * Usage:
 *   node scripts/generate-ontology-docs.js
 *
 * Input:  artefacts/vocabularies/untp-core/untp-ontology.jsonld
 * Output: website/docs/specification/CoreVocabulary.md
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INPUT = path.join(
  ROOT,
  'artefacts/vocabularies/untp-core/untp-ontology.jsonld'
);
const OUTPUT = path.join(ROOT, 'website/docs/specification/CoreVocabulary.md');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract the local name from a prefixed or full URI. */
function localName(id) {
  if (!id) return '';
  if (typeof id === 'object') id = id['@id'] || '';
  const hash = id.lastIndexOf('#');
  if (hash >= 0) return id.slice(hash + 1);
  const slash = id.lastIndexOf('/');
  if (slash >= 0) return id.slice(slash + 1);
  const colon = id.lastIndexOf(':');
  if (colon >= 0) return id.slice(colon + 1);
  return id;
}

/** Return an anchor-friendly lowercase string. */
function anchor(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Resolve a range @id to a human-friendly type string with optional link. */
function resolveRange(rangeId) {
  if (!rangeId) return '';
  const id = typeof rangeId === 'object' ? rangeId['@id'] || '' : rangeId;

  // XSD types
  if (id.startsWith('xsd:') || id.includes('XMLSchema#')) {
    const xsd = localName(id);
    const map = {
      string: 'string',
      anyURI: 'URI',
      boolean: 'boolean',
      integer: 'integer',
      double: 'number',
      date: 'date',
      datetime: 'dateTime',
      dateTime: 'dateTime',
    };
    return map[xsd] || xsd;
  }

  // UNTP types — link to anchor
  if (id.startsWith('untp:') || id.includes('uncefact.org/untp/')) {
    const name = localName(id);
    return `[${name}](#${anchor(name)})`;
  }

  // External types — just show the local name
  return localName(id);
}

/** Escape curly braces for MDX compatibility. */
function escapeMdx(s) {
  return s.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
}

/** Normalise rdfs:comment — may be string, array, or object. Pick first useful value. */
function getComment(node) {
  const c = node['rdfs:comment'];
  if (!c) return '';
  if (typeof c === 'string') return c.trim();
  if (Array.isArray(c)) return (c[0] || '').toString().trim();
  if (typeof c === 'object' && c['@value']) return c['@value'].trim();
  return String(c).trim();
}

/** Get first description for a property in context of a specific domain class. */
function getPropertyComment(node, domainClassId) {
  const c = node['rdfs:comment'];
  if (!c) return '';
  if (typeof c === 'string') return c.trim();
  if (!Array.isArray(c)) {
    if (typeof c === 'object' && c['@value']) return c['@value'].trim();
    return String(c).trim();
  }

  // Match description to domain position
  const domains = getDomains(node);
  const idx = domains.indexOf(domainClassId);
  if (idx >= 0 && idx < c.length) {
    return (
      typeof c[idx] === 'object' ? c[idx]['@value'] : String(c[idx])
    ).trim();
  }
  return (typeof c[0] === 'object' ? c[0]['@value'] : String(c[0])).trim();
}

/** Extract domain class IDs from a property node. */
function getDomains(node) {
  const d = node['schema:domainIncludes'];
  if (!d) return [];
  if (Array.isArray(d))
    return d.map(x => (typeof x === 'object' ? x['@id'] : x));
  return [typeof d === 'object' ? d['@id'] : d];
}

/** Extract range from a property node. */
function getRange(node) {
  const r = node['schema:rangeIncludes'];
  if (!r) return null;
  if (Array.isArray(r)) return r[0];
  return r;
}

/** Check if a node is of a given RDF type. */
function hasType(node, type) {
  const t = node['@type'];
  if (!t) return false;
  if (Array.isArray(t)) return t.includes(type);
  return t === type;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
const graph = data['@graph'];

// Separate classes, properties, and enum values
const classes = [];
const properties = [];
const enumValues = []; // instances like AssessmentLevel#authority-benchmark
const ontologyMeta = {};

for (const node of graph) {
  const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];

  if (types.includes('owl:Ontology')) {
    Object.assign(ontologyMeta, node);
    continue;
  }

  if (types.includes('rdfs:Class')) {
    // Skip enum value instances (e.g. AssessmentLevel#authority-benchmark)
    const id = node['@id'] || '';
    if (id.includes('#')) continue;
    classes.push(node);
    continue;
  }

  if (types.includes('rdf:Property')) {
    properties.push(node);
    continue;
  }

  // Enum value instances — @type is a UNTP class (e.g. "untp:AssessmentLevel")
  // and @id contains '#'
  const id = node['@id'] || '';
  if (id.includes('#') && node['rdf:value'] !== undefined) {
    enumValues.push(node);
  }
}

// Build enum map: codeListClassId -> [enum value nodes]
const enumMap = new Map(); // e.g. "untp:AssessmentLevel" -> [{...}, ...]
for (const ev of enumValues) {
  const typeId = Array.isArray(ev['@type']) ? ev['@type'][0] : ev['@type'];
  if (!enumMap.has(typeId)) enumMap.set(typeId, []);
  enumMap.get(typeId).push(ev);
}

// Also identify code list classes that are "external" (declared as rdfs:Class
// but have no enum values in this file and no domain properties).
// These are: CountryCode, MimeType, UnitOfMeasure
const codeListClassIds = new Set([
  ...enumMap.keys(),
  // External code lists — classes whose name ends with a known pattern and
  // have no properties attached (we detect them by checking for zero domain props later)
]);

// Build property-to-class map
const classPropMap = new Map(); // classId -> [{ prop, range, comment }]
for (const cls of classes) {
  classPropMap.set(cls['@id'], []);
}

for (const prop of properties) {
  const domains = getDomains(prop);
  const range = getRange(prop);
  const label = prop['rdfs:label'] || localName(prop['@id']);

  for (const domainId of domains) {
    if (!classPropMap.has(domainId)) continue;
    classPropMap.get(domainId).push({
      name: label,
      range: resolveRange(range),
      comment: getPropertyComment(prop, domainId),
    });
  }
}

// Identify credential types, domain classes, and code lists
const credentialOrder = [
  'untp:VerifiableCredential',
  'untp:DigitalProductPassport',
  'untp:DigitalFacilityRecord',
  'untp:DigitalConformityCredential',
  'untp:DigitalTraceabilityEvent',
  'untp:DigitalIdentityAnchor',
];

// External code lists — referenced as range types but values are defined
// in an external vocabulary. Map classId -> { label, url }.
const externalCodeLists = {
  'untp:CountryCode': {
    label: 'ISO 3166-1 alpha-2',
    url: 'https://www.iso.org/iso-3166-country-codes.html',
  },
  'untp:MimeType': {
    label: 'IANA Media Types',
    url: 'https://www.iana.org/assignments/media-types/media-types.xhtml',
  },
  'untp:UnitOfMeasure': {
    label: 'UNECE Recommendation 20',
    url: 'https://unece.org/trade/uncefact/cl-recommendations',
  },
};

const credentialClasses = [];
const domainClasses = [];
const codeListClasses = []; // code lists with inline enum values
const externalCodeListClasses = []; // code lists referencing external vocabularies

// De-duplicate class entries: some classes (e.g. PartyRole) appear twice in
// the graph — once as a domain class with properties and once as a code list
// definition. Keep one canonical entry per @id.
const classById = new Map();
for (const cls of classes) {
  const id = cls['@id'];
  if (
    !classById.has(id) ||
    (getComment(cls) && !getComment(classById.get(id)))
  ) {
    classById.set(id, cls);
  }
}

// Classify each unique class. A class that is a code list AND has domain
// properties goes into BOTH sections — rendered as a domain class in Domain
// Classes and as a code list in Code Lists.
const codeListIds = new Set([
  ...enumMap.keys(),
  ...Object.keys(externalCodeLists),
]);

for (const [id, cls] of classById) {
  if (credentialOrder.includes(id)) {
    credentialClasses.push(cls);
  } else if (externalCodeLists[id]) {
    externalCodeListClasses.push(cls);
  } else if (enumMap.has(id)) {
    // Code list — check if it also has domain properties
    const props = classPropMap.get(id) || [];
    const annotationProps = new Set(['extendsModel', 'credentialSubjectType']);
    const visibleProps = props.filter(p => !annotationProps.has(p.name));
    if (visibleProps.length > 0) {
      // Has properties — include in domain classes too
      domainClasses.push(cls);
    }
    codeListClasses.push(cls);
  } else {
    domainClasses.push(cls);
  }
}

// Sort credential classes in defined order
credentialClasses.sort(
  (a, b) =>
    credentialOrder.indexOf(a['@id']) - credentialOrder.indexOf(b['@id'])
);

// Sort domain classes alphabetically
domainClasses.sort((a, b) => {
  const na = (a['rdfs:label'] || localName(a['@id'])).toLowerCase();
  const nb = (b['rdfs:label'] || localName(b['@id'])).toLowerCase();
  return na.localeCompare(nb);
});

// Sort code list classes alphabetically
codeListClasses.sort((a, b) => {
  const na = (a['rdfs:label'] || localName(a['@id'])).toLowerCase();
  const nb = (b['rdfs:label'] || localName(b['@id'])).toLowerCase();
  return na.localeCompare(nb);
});

externalCodeListClasses.sort((a, b) => {
  const na = (a['rdfs:label'] || localName(a['@id'])).toLowerCase();
  const nb = (b['rdfs:label'] || localName(b['@id'])).toLowerCase();
  return na.localeCompare(nb);
});

// ---------------------------------------------------------------------------
// Render generated content (everything between the markers)
// ---------------------------------------------------------------------------

const BEGIN_MARKER = '<!-- GENERATED:BEGIN ontology -->';
const END_MARKER = '<!-- GENERATED:END ontology -->';

const lines = [];

// ---------------------------------------------------------------------------
// Render a class section
// ---------------------------------------------------------------------------
function renderClass(cls) {
  const label = cls['rdfs:label'] || localName(cls['@id']);
  const comment = getComment(cls);
  const props = classPropMap.get(cls['@id']) || [];

  lines.push(`### ${label}`);
  lines.push('');
  if (comment) {
    lines.push(escapeMdx(comment));
    lines.push('');
  }

  // extendsModel annotation
  const ext = cls['untp:extendsModel'];
  if (ext) {
    let extId = typeof ext === 'object' ? ext['@id'] : ext;
    // Resolve common prefixes to full URIs
    if (extId.startsWith('schema:'))
      extId = 'https://schema.org/' + extId.slice(7);
    const extName = localName(extId);
    lines.push(
      `**Extends:** [\`${escapeMdx(
        extName
      )}\`](${extId}) — inherited properties from the external vocabulary are not repeated here.`
    );
    lines.push('');
  }

  // credentialSubjectType annotation
  const cst = cls['untp:credentialSubjectType'];
  if (cst) {
    const cstId = typeof cst === 'object' ? cst['@id'] : cst;
    const cstName = localName(cstId);
    lines.push(`**Credential Subject:** [${cstName}](#${anchor(cstName)})`);
    lines.push('');
  }

  // subClassOf
  const sub = cls['rdfs:subClassOf'];
  if (sub) {
    const subId = typeof sub === 'object' ? sub['@id'] : sub;
    const subName = localName(subId);
    if (subId.startsWith('untp:') || subId.includes('uncefact.org/untp/')) {
      lines.push(`**Sub-class of:** [${subName}](#${anchor(subName)})`);
    } else {
      lines.push(`**Sub-class of:** \`${subName}\``);
    }
    lines.push('');
  }

  // Property table — filter out annotation properties already shown as metadata
  const annotationProps = new Set(['extendsModel', 'credentialSubjectType']);
  const visibleProps = props.filter(p => !annotationProps.has(p.name));
  if (visibleProps.length > 0) {
    lines.push('| Property | Type | Description |');
    lines.push('| --- | --- | --- |');
    for (const p of visibleProps) {
      const desc = escapeMdx(
        p.comment.replace(/\|/g, '\\|').replace(/\n/g, ' ')
      );
      lines.push(`| ${p.name} | ${p.range} | ${desc} |`);
    }
    lines.push('');
  }
}

// Credential types
lines.push('## Credential Types');
lines.push('');
for (const cls of credentialClasses) {
  renderClass(cls);
}

// Domain classes
lines.push('## Domain Classes');
lines.push('');
for (const cls of domainClasses) {
  renderClass(cls);
}

// ---------------------------------------------------------------------------
// Code Lists
// ---------------------------------------------------------------------------
lines.push('## Code Lists');
lines.push('');

// Render inline code lists (with enumerated values)
for (const cls of codeListClasses) {
  const label = cls['rdfs:label'] || localName(cls['@id']);
  const comment = getComment(cls);
  const values = enumMap.get(cls['@id']) || [];

  lines.push(`### ${label}`);
  lines.push('');
  if (comment) {
    lines.push(escapeMdx(comment));
    lines.push('');
  }

  if (values.length > 0) {
    // Detect whether any value has a non-empty rdfs:comment
    const hasDescription = values.some(v => {
      const c = getComment(v);
      return c.length > 0;
    });

    if (hasDescription) {
      lines.push('| Value | Name | Description |');
      lines.push('| --- | --- | --- |');
      for (const v of values) {
        const val = v['rdf:value'] || '';
        const name = escapeMdx(
          (v['rdfs:label'] || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
        );
        const desc = escapeMdx(
          getComment(v).replace(/\|/g, '\\|').replace(/\n/g, ' ')
        );
        lines.push(`| ${val} | ${name} | ${desc} |`);
      }
    } else {
      lines.push('| Value | Name |');
      lines.push('| --- | --- |');
      for (const v of values) {
        const val = v['rdf:value'] || '';
        const name = escapeMdx(
          (v['rdfs:label'] || val).replace(/\|/g, '\\|').replace(/\n/g, ' ')
        );
        lines.push(`| ${val} | ${name} |`);
      }
    }
    lines.push('');
  }
}

// Render external code lists (reference only)
for (const cls of externalCodeListClasses) {
  const label = cls['rdfs:label'] || localName(cls['@id']);
  const comment = getComment(cls);
  const ext = externalCodeLists[cls['@id']];

  lines.push(`### ${label}`);
  lines.push('');
  if (comment) {
    lines.push(escapeMdx(comment));
    lines.push('');
  }
  if (ext) {
    lines.push(
      `Values are drawn from an external vocabulary: [${ext.label}](${ext.url})`
    );
    lines.push('');
  }
}

// ---------------------------------------------------------------------------
// Property index
// ---------------------------------------------------------------------------
lines.push('## Property Index');
lines.push('');
lines.push(
  'Alphabetical listing of all properties defined in the UNTP core vocabulary.'
);
lines.push('');
lines.push('| Property | Domain(s) | Range | Description |');
lines.push('| --- | --- | --- | --- |');

// Sort properties alphabetically
const sortedProps = [...properties].sort((a, b) => {
  const na = (a['rdfs:label'] || localName(a['@id'])).toLowerCase();
  const nb = (b['rdfs:label'] || localName(b['@id'])).toLowerCase();
  return na.localeCompare(nb);
});

for (const prop of sortedProps) {
  const label = prop['rdfs:label'] || localName(prop['@id']);
  const domains = getDomains(prop);
  const domainStr = domains
    .map(d => {
      const n = localName(d);
      return `[${n}](#${anchor(n)})`;
    })
    .join(', ');
  const range = resolveRange(getRange(prop));
  const comment = escapeMdx(
    getComment(prop).replace(/\|/g, '\\|').replace(/\n/g, ' ')
  );
  lines.push(`| ${label} | ${domainStr} | ${range} | ${comment} |`);
}
lines.push('');

// ---------------------------------------------------------------------------
// Write output — update only the marked region, preserve everything else
// ---------------------------------------------------------------------------

const generatedBlock =
  BEGIN_MARKER + '\n' + lines.join('\n').trimEnd() + '\n' + END_MARKER;

if (fs.existsSync(OUTPUT)) {
  const existing = fs.readFileSync(OUTPUT, 'utf8');
  const startIdx = existing.indexOf(BEGIN_MARKER);
  const endIdx = existing.indexOf(END_MARKER);

  if (startIdx >= 0 && endIdx > startIdx) {
    // Replace the marked region (inclusive of markers)
    const before = existing.slice(0, startIdx);
    const after = existing.slice(endIdx + END_MARKER.length);
    fs.writeFileSync(OUTPUT, before + generatedBlock + after, 'utf8');
    console.log(`Updated generated section in ${OUTPUT}`);
  } else {
    // Markers not found — append them at the end of the file
    fs.writeFileSync(
      OUTPUT,
      existing.trimEnd() + '\n\n' + generatedBlock + '\n',
      'utf8'
    );
    console.log(
      `Appended generated section to ${OUTPUT} (markers were missing)`
    );
  }
} else {
  // Bootstrap: create the file with frontmatter + markers
  const bootstrap = [
    '---',
    'sidebar_position: 41',
    'title: Core Vocabulary',
    '---',
    '',
    "import Disclaimer from '../_disclaimer.mdx';",
    '',
    '<Disclaimer />',
    '',
    '# UNTP Core Vocabulary',
    '',
    generatedBlock,
    '',
  ].join('\n');
  fs.writeFileSync(OUTPUT, bootstrap, 'utf8');
  console.log(`Created ${OUTPUT}`);
}
