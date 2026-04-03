#!/usr/bin/env node

/**
 * Usage: node generate.js <input.json> [output-dir]
 * Generates one .md and one .json file per skos:Concept in the @graph array.
 */

const fs = require('fs');
const path = require('path');

// --- Args ---
const inputPath = process.argv[2];
const outputDir = process.argv[3] || './output';

if (!inputPath) {
  console.error('Usage: node generate.js <input.json> [output-dir]');
  process.exit(1);
}

// --- Load input ---
const raw = fs.readFileSync(inputPath, 'utf-8');
const data = JSON.parse(raw);
const graph = data['@graph'] || [];

// --- Helpers ---

/** Extract the last path segment from a prefixed or URL id.
 *  "topics:ecological-resilience" -> "ecological-resilience"
 *  "https://example.org/topics/foo" -> "foo"
 */
function slugFromId(id = '') {
  if (id.includes(':')) {
    const parts = id.split(':');
    return parts[parts.length - 1];
  }
  return path.basename(id);
}

/** Extract plain string value from {"@value": "...", "@language": "en"} or a plain string. */
function extractValue(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object' && '@value' in field) return field['@value'];
  return String(field);
}

/** Render a YAML frontmatter block. Values are simple strings (no multiline). */
function toYamlFrontmatter(obj) {
  const lines = Object.entries(obj).map(([k, v]) => {
    if (Array.isArray(v)) {
      const items = v.map(i => `  - ${i}`).join('\n');
      return `${k}:\n${items}`;
    }
    // Wrap in quotes if value contains colon or special chars
    const safe = String(v).includes(':') ? `"${v}"` : v;
    return `${k}: ${safe}`;
  });
  return `---\n${lines.join('\n')}\n---\n`;
}

/** Build the clean output JSON for a concept. */
function buildOutputJson(concept, slug) {
  const narrower = concept.narrower || [];
  const relatedMatch = concept.relatedMatch || [];

  return {
    prefLabel: extractValue(concept.prefLabel),
    id: concept['@id'],
    definition: extractValue(concept.definition),
    broader: concept.broader,
    narrower,
    relatedTopic: concept.relatedTopic,
    scopeNote: concept.scopeNote,
    allowedUnit: concept.allowedUnit,
    aggregationMethod: concept.aggregationMethod,
    improvementDirection: concept.improvementDirection,
    relatedMatch,
  };
}

/** Build the YAML frontmatter fields for a concept. */
function buildFrontmatter(concept, slug) {
  const fm = {
    title: extractValue(concept.prefLabel),
    permalink: `${slug}.html`,
    jsonid: slug,
  };

  return fm;
}

// --- Main ---
const concepts = graph.filter(node => node['@type'] === 'skos:Concept');

if (concepts.length === 0) {
  console.warn('No skos:Concept entries found in @graph.');
  process.exit(0);
}

fs.mkdirSync(outputDir, {recursive: true});
fs.mkdirSync(outputDir + '/_concepts', {recursive: true});
fs.mkdirSync(outputDir + '/_data', {recursive: true});

const context = data['@context'] || {};
const mapping = Object.fromEntries(
  Object.entries(context).filter(
    ([, v]) => typeof v === 'string' && v.startsWith('http')
  )
);
const mappingPath = path.join(outputDir, '_data/mapping.json');
fs.mkdirSync(outputDir, {recursive: true});
fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf-8');
console.log(`✔ mapping.json (${Object.keys(mapping).length} prefixes)`);

let count = 0;
for (const concept of concepts) {
  const slug = slugFromId(concept['@id']);

  // --- Write .md ---
  const fm = buildFrontmatter(concept, slug);
  const mdContent = toYamlFrontmatter(fm);
  const mdPath = path.join(outputDir, `_concepts/${slug}.md`);
  fs.writeFileSync(mdPath, mdContent, 'utf-8');

  // --- Write .json ---
  const jsonContent = buildOutputJson(concept, slug);
  const jsonPath = path.join(outputDir, `_data/${slug}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf-8');

  console.log(`✔ ${slug}.md + ${slug}.json`);
  count++;
}

console.log(`\nDone — ${count} concept(s) written to "${outputDir}"`);
