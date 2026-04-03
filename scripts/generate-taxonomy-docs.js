#!/usr/bin/env node
/**
 * generate-taxonomy-docs.js
 *
 * Reads one or more SKOS ConceptScheme JSON-LD files and updates the
 * auto-generated sections of a markdown page.
 *
 * Each vocabulary gets its own marker pair:
 *   <!-- GENERATED:BEGIN <section-id> -->
 *   <!-- GENERATED:END <section-id> -->
 *
 * where <section-id> is derived from the section title (e.g.
 * "conformity-topics", "performance-metrics"). All content outside the
 * markers is preserved, allowing hand-written context to coexist with
 * the generated reference tables.
 *
 * If the output file does not exist or is missing markers, a bootstrap
 * page is created.
 *
 * Usage:
 *   node scripts/generate-taxonomy-docs.js <output.md> [options] \
 *     --vocab <input.jsonld> --section-title "Title" \
 *    [--vocab <input.jsonld> --section-title "Title" ...]
 *
 * Options:
 *   --title "Page Title"        Frontmatter / h1 title (required)
 *   --sidebar-position N        Docusaurus sidebar position (default: 50)
 *
 * Example:
 *   node scripts/generate-taxonomy-docs.js \
 *     website/docs/specification/CoreTaxonomies.md \
 *     --title "Core Taxonomies" --sidebar-position 42 \
 *     --vocab artefacts/vocabularies/untp-topics/untp-topics.jsonld \
 *       --section-title "Conformity Topics" \
 *     --vocab artefacts/vocabularies/untp-metrics/untp-metrics.jsonld \
 *       --section-title "Performance Metrics"
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Parse CLI arguments
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    'Usage: node generate-taxonomy-docs.js <output.md> --title "..." ' +
      '--vocab <file> --section-title "..." [--vocab <file> --section-title "..."]'
  );
  process.exit(1);
}

const outputPath = path.resolve(ROOT, args[0]);
let pageTitle = '';
let sidebarPosition = 50;

// Collect vocab entries: [{inputPath, sectionTitle}]
const vocabs = [];

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--title' && args[i + 1]) {
    pageTitle = args[++i];
  } else if (args[i] === '--sidebar-position' && args[i + 1]) {
    sidebarPosition = parseInt(args[++i], 10);
  } else if (args[i] === '--vocab' && args[i + 1]) {
    const entry = {inputPath: path.resolve(ROOT, args[++i]), sectionTitle: ''};
    // Look ahead for --section-title
    if (args[i + 1] === '--section-title' && args[i + 2]) {
      i++;
      entry.sectionTitle = args[++i];
    }
    vocabs.push(entry);
  }
}

if (vocabs.length === 0) {
  console.error('Error: at least one --vocab is required.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Get text value from a JSON-LD language-tagged value or plain string. */
function textVal(v) {
  if (!v) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'object' && v['@value']) return v['@value'];
  return String(v);
}

/** Extract the local name from a URI or prefixed ID. */
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

/** Normalise an @id reference — handles string, object, or array. */
function idOf(v) {
  if (!v) return null;
  if (typeof v === 'string') return v;
  if (typeof v === 'object' && v['@id']) return v['@id'];
  return null;
}

/** Normalise to array. */
function toArray(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  return [v];
}

/** Convert a title to a kebab-case section id for markers. */
function sectionId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---------------------------------------------------------------------------
// Process each vocabulary and collect section content
// ---------------------------------------------------------------------------

/**
 * Parse a single SKOS vocabulary file and return markdown lines for its section.
 */
function renderVocabSection(inputPath, sectionTitle) {
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const graph = data['@graph'];

  // Find scheme and concepts
  let scheme = null;
  const conceptMap = new Map();

  for (const node of graph) {
    const types = toArray(node['@type']);
    if (types.includes('skos:ConceptScheme')) {
      scheme = node;
    } else if (types.includes('skos:Concept')) {
      conceptMap.set(node['@id'], node);
    }
  }

  if (!scheme) {
    console.error(`No skos:ConceptScheme found in ${inputPath}`);
    process.exit(1);
  }

  const title = sectionTitle || textVal(scheme['dcterms:title']);
  const description = textVal(scheme['dcterms:description']);
  const version = scheme['owl:versionInfo'] || '';

  // Build hierarchy
  const topConceptIds = toArray(
    scheme.hasTopConcept || scheme['skos:hasTopConcept']
  ).map(v => (typeof v === 'string' ? v : idOf(v)));

  function getChildren(conceptId) {
    const concept = conceptMap.get(conceptId);
    if (!concept) return [];
    const narrower = toArray(concept.narrower || concept['skos:narrower']);
    return narrower
      .map(v => (typeof v === 'string' ? v : idOf(v)))
      .filter(Boolean);
  }

  // Detect extra columns
  const extraProps = [
    'allowedUnit',
    'aggregationMethod',
    'improvementDirection',
  ];
  const presentExtras = [];

  for (const prop of extraProps) {
    for (const [, concept] of conceptMap) {
      if (concept[prop] !== undefined) {
        presentExtras.push(prop);
        break;
      }
    }
  }

  const hasExtras = presentExtras.length > 0;

  const extraHeaders = {
    allowedUnit: 'Unit',
    aggregationMethod: 'Aggregation',
    improvementDirection: 'Direction',
  };

  // Render section
  const lines = [];

  lines.push(`## ${title}`);
  lines.push('');
  if (description) {
    lines.push(description);
    lines.push('');
  }
  if (version) {
    lines.push(`**Version:** ${version}`);
    lines.push('');
  }
  lines.push(
    `**Top-level categories:** ${topConceptIds.length}  |  **Total concepts:** ${conceptMap.size}`
  );
  lines.push('');

  for (const topId of topConceptIds) {
    const topConcept = conceptMap.get(topId);
    if (!topConcept) continue;

    const notation = topConcept.notation || topConcept['skos:notation'] || '';
    const label = textVal(topConcept.prefLabel || topConcept['skos:prefLabel']);
    const def = textVal(topConcept.definition || topConcept['skos:definition']);
    const scopeNote = textVal(
      topConcept.scopeNote || topConcept['skos:scopeNote']
    );

    lines.push(`### ${notation} ${label}`);
    lines.push('');
    if (def) {
      lines.push(def);
      lines.push('');
    }
    if (scopeNote) {
      lines.push(`> ${scopeNote}`);
      lines.push('');
    }

    const childIds = getChildren(topId);
    if (childIds.length > 0) {
      const headerCols = ['Code', hasExtras ? 'Metric' : 'Topic', 'Definition'];
      for (const ep of presentExtras) {
        headerCols.push(extraHeaders[ep]);
      }
      lines.push(`| ${headerCols.join(' | ')} |`);
      lines.push(`| ${headerCols.map(() => '---').join(' | ')} |`);

      for (const childId of childIds) {
        const child = conceptMap.get(childId);
        if (!child) continue;

        const cn = child.notation || child['skos:notation'] || '';
        const cl = textVal(child.prefLabel || child['skos:prefLabel']);
        const cd = textVal(child.definition || child['skos:definition'])
          .replace(/\|/g, '\\|')
          .replace(/\n/g, ' ');

        const cols = [cn, cl, cd];

        for (const ep of presentExtras) {
          const val = child[ep];
          if (!val) {
            cols.push('');
          } else {
            cols.push(String(val));
          }
        }

        lines.push(`| ${cols.join(' | ')} |`);
      }
      lines.push('');
    }
  }

  return lines;
}

// ---------------------------------------------------------------------------
// Build generated blocks and write — update only marked regions
// ---------------------------------------------------------------------------

// Build a marked block for each vocabulary section
const blocks = vocabs.map(v => {
  const id = sectionId(v.sectionTitle);
  const beginMarker = `<!-- GENERATED:BEGIN ${id} -->`;
  const endMarker = `<!-- GENERATED:END ${id} -->`;
  const sectionLines = renderVocabSection(v.inputPath, v.sectionTitle);
  return {id, beginMarker, endMarker, content: sectionLines.join('\n')};
});

if (fs.existsSync(outputPath)) {
  let existing = fs.readFileSync(outputPath, 'utf8');
  let updated = false;

  for (const block of blocks) {
    const startIdx = existing.indexOf(block.beginMarker);
    const endIdx = existing.indexOf(block.endMarker);

    if (startIdx >= 0 && endIdx > startIdx) {
      // Replace the marked region (inclusive of markers)
      const before = existing.slice(0, startIdx);
      const after = existing.slice(endIdx + block.endMarker.length);
      existing =
        before +
        block.beginMarker +
        '\n' +
        block.content.trimEnd() +
        '\n' +
        block.endMarker +
        after;
      updated = true;
    } else {
      // Markers not found — append at end
      existing =
        existing.trimEnd() +
        '\n\n' +
        block.beginMarker +
        '\n' +
        block.content.trimEnd() +
        '\n' +
        block.endMarker +
        '\n';
      console.log(`  Appended section "${block.id}" (markers were missing)`);
      updated = true;
    }
  }

  fs.writeFileSync(outputPath, existing, 'utf8');
  console.log(`Updated generated sections in ${outputPath}`);
} else {
  // Bootstrap: create the file with frontmatter + all marked sections
  const bootstrapLines = [
    '---',
    `sidebar_position: ${sidebarPosition}`,
    `title: ${pageTitle || 'Core Taxonomies'}`,
    '---',
    '',
    "import Disclaimer from '../_disclaimer.mdx';",
    '',
    '<Disclaimer />',
    '',
    `# ${pageTitle || 'Core Taxonomies'}`,
    '',
  ];

  for (const block of blocks) {
    bootstrapLines.push(block.beginMarker);
    bootstrapLines.push(block.content.trimEnd());
    bootstrapLines.push(block.endMarker);
    bootstrapLines.push('');
  }

  fs.writeFileSync(outputPath, bootstrapLines.join('\n'), 'utf8');
  console.log(`Created ${outputPath}`);
}
