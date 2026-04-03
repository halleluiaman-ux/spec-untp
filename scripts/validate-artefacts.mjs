/**
 * UNTP Artefact Validation
 *
 * Validates consistency across the four artefact layers:
 *   1. JSON Schemas    (artefacts/schema/)
 *   2. Sample instances (artefacts/samples/)
 *   3. JSON-LD Context (artefacts/contexts/)
 *   4. Ontology        (artefacts/vocabularies/untp-core/)
 *   5. Taxonomies      (artefacts/vocabularies/untp-metrics/, untp-topics/)
 *
 * Run from repository root:  node scripts/validate-artefacts.mjs
 */

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import jsonldModule from "jsonld";
import { readFileSync, existsSync, readdirSync } from "fs";
import { resolve, join, basename } from "path";

const BASE = resolve("artefacts");
const SCHEMA_DIR = `${BASE}/schema/v0.7.0`;
const SAMPLE_DIR = `${BASE}/samples/v0.7.0`;
const CONTEXT_FILE = `${BASE}/contexts/v0.7.0/untp-context.jsonld`;
const VOCAB_FILE = `${BASE}/vocabularies/untp-core/untp-ontology.jsonld`;
const TAXONOMY_FILES = [
  `${BASE}/vocabularies/untp-metrics/untp-metrics.jsonld`,
  `${BASE}/vocabularies/untp-topics/untp-topics.jsonld`,
];

const VALIDATIONS = [
  {
    schema: "dpp/DigitalProductPassport.json",
    samples: [
      "dpp/DigitalProductPassport_instance.json",
      "dpp/DigitalProductPassport_cathode_instance.json",
      "dpp/DigitalProductPassport_battery_instance.json",
    ],
  },
  {
    schema: "dcc/ConformityCredential.json",
    samples: [
      "dcc/ConformityCredential_instance.json",
      "dcc/ConformityCredential_smelter_instance.json",
      "dcc/ConformityCredential_battery_instance.json",
    ],
  },
  {
    schema: "dfr/DigitalFacilityRecord.json",
    samples: [
      "dfr/DigitalFacilityRecord_instance.json",
      "dfr/DigitalFacilityRecord_smelter_instance.json",
      "dfr/DigitalFacilityRecord_battery_instance.json",
    ],
  },
  {
    schema: "dte/DigitalTraceabilityEvent.json",
    samples: [
      "dte/DigitalTraceabilityEvent_instance.json",
      "dte/DigitalTraceabilityEvent_smelter_make_instance.json",
      "dte/DigitalTraceabilityEvent_battery_make_instance.json",
      "dte/DigitalTraceabilityEvent_cathode_move_instance.json",
    ],
  },
  {
    schema: "dia/DigitalIdentityAnchor.json",
    samples: [
      "dia/DigitalIdentityAnchor_instance.json",
      "dia/DigitalIdentityAnchor_mine_instance.json",
      "dia/DigitalIdentityAnchor_smelter_instance.json",
      "dia/DigitalIdentityAnchor_battery_instance.json",
    ],
  },
  {
    schema: "cvc/ConformityScheme.json",
    samples: ["cvc/ConformityScheme_instance.json"],
  },
  {
    schema: "cvc/ConformityProfile.json",
    samples: ["cvc/ConformityProfile_instance.json"],
  },
  {
    schema: "cvc/Criterion.json",
    samples: [
      "cvc/Criterion_due_diligence_instance.json",
      "cvc/Criterion_input_controls_instance.json",
      "cvc/Criterion_mass_balance_instance.json",
    ],
  },
];

function loadJson(path) {
  return JSON.parse(readFileSync(path, "utf-8"));
}

const results = { pass: 0, fail: 0, skip: 0 };

function pass(msg) {
  console.log(`  PASS  ${msg}`);
  results.pass++;
}
function fail(msg, details) {
  console.log(`  FAIL  ${msg}`);
  if (details) {
    const lines = Array.isArray(details) ? details : [details];
    for (const line of lines.slice(0, 8)) console.log(`        ${line}`);
    if (lines.length > 8)
      console.log(`        ... and ${lines.length - 8} more`);
  }
  results.fail++;
}
function skip(msg) {
  console.log(`  SKIP  ${msg}`);
  results.skip++;
}

// ================================================================
// 1. Vocabulary & taxonomy files are valid JSON-LD
// ================================================================

console.log("=== 1. VOCABULARY & TAXONOMY FILES ===\n");

for (const file of [VOCAB_FILE, ...TAXONOMY_FILES]) {
  const name = basename(file);
  if (!existsSync(file)) {
    skip(`${name} (not found)`);
    continue;
  }
  try {
    const data = loadJson(file);
    if (!data["@context"]) {
      fail(`${name} — missing @context`);
      continue;
    }
    if (!data["@graph"] || !Array.isArray(data["@graph"])) {
      fail(`${name} — missing or invalid @graph`);
      continue;
    }
    const issues = [];
    for (const item of data["@graph"]) {
      if (!item["@id"])
        issues.push(`entry missing @id: ${JSON.stringify(item).slice(0, 80)}`);
      if (!item["@type"]) issues.push(`${item["@id"]} missing @type`);
    }
    if (issues.length > 0)
      fail(`${name} — ${issues.length} structural issues`, issues);
    else pass(`${name} (${data["@graph"].length} entries)`);
  } catch (e) {
    fail(`${name} — parse error: ${e.message}`);
  }
}

for (const file of TAXONOMY_FILES) {
  const name = basename(file);
  if (!existsSync(file)) continue;
  const data = loadJson(file);
  const graph = data["@graph"] || [];
  const schemes = graph.filter((i) =>
    [].concat(i["@type"]).includes("skos:ConceptScheme")
  );
  const concepts = graph.filter((i) =>
    [].concat(i["@type"]).includes("skos:Concept")
  );
  if (schemes.length === 0) fail(`${name} — no skos:ConceptScheme found`);
  else
    pass(
      `${name} SKOS structure (${schemes.length} scheme(s), ${concepts.length} concepts)`
    );
  const missingLabels = concepts.filter(
    (c) => !c["skos:prefLabel"] && !c["prefLabel"]
  );
  if (missingLabels.length > 0)
    fail(
      `${name} — ${missingLabels.length} concepts missing skos:prefLabel`,
      missingLabels.map((c) => c["@id"])
    );
}

console.log();

// ================================================================
// 2. Samples validate against JSON schemas
// ================================================================

console.log("=== 2. SAMPLES vs JSON SCHEMAS ===\n");

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);

for (const { schema, samples } of VALIDATIONS) {
  const schemaPath = `${SCHEMA_DIR}/${schema}`;
  if (!existsSync(schemaPath)) {
    skip(`${schema} (schema not found)`);
    continue;
  }
  let validate;
  try {
    validate = ajv.compile(loadJson(schemaPath));
  } catch (e) {
    fail(`${schema} — compile error: ${e.message}`);
    continue;
  }

  for (const sample of samples) {
    const samplePath = `${SAMPLE_DIR}/${sample}`;
    if (!existsSync(samplePath)) {
      skip(`${sample} (not found)`);
      continue;
    }
    const valid = validate(loadJson(samplePath));
    if (valid) pass(sample);
    else
      fail(
        sample,
        validate.errors.map(
          (e) =>
            `${e.instancePath} ${e.message}${
              e.params?.additionalProperty
                ? ` (${e.params.additionalProperty})`
                : ""
            }`
        )
      );
  }
}

console.log();

// ================================================================
// 3. Schema $ref integrity
// ================================================================

console.log("=== 3. SCHEMA $ref INTEGRITY ===\n");

function collectRefs(obj, refs = new Set()) {
  if (!obj || typeof obj !== "object") return refs;
  if (Array.isArray(obj)) {
    for (const item of obj) collectRefs(item, refs);
    return refs;
  }
  for (const [key, val] of Object.entries(obj)) {
    if (key === "$ref" && typeof val === "string") refs.add(val);
    else if (typeof val === "object") collectRefs(val, refs);
  }
  return refs;
}

function resolveJsonPointer(obj, pointer) {
  const parts = pointer.split("/").filter(Boolean);
  let current = obj;
  for (const part of parts) {
    const decoded = part.replace(/~1/g, "/").replace(/~0/g, "~");
    if (current && typeof current === "object" && decoded in current)
      current = current[decoded];
    else return undefined;
  }
  return current;
}

for (const type of readdirSync(SCHEMA_DIR)) {
  const typeDir = join(SCHEMA_DIR, type);
  let files;
  try {
    files = readdirSync(typeDir).filter((f) => f.endsWith(".json"));
  } catch {
    continue;
  }
  for (const file of files) {
    const schema = loadJson(join(typeDir, file));
    const refs = collectRefs(schema);
    const dangling = [...refs].filter(
      (r) =>
        r.startsWith("#") &&
        resolveJsonPointer(schema, r.slice(1)) === undefined
    );
    if (dangling.length > 0)
      fail(`${type}/${file} — ${dangling.length} dangling $ref(s)`, dangling);
    else pass(`${type}/${file} (${refs.size} refs)`);
  }
}

console.log();

// ================================================================
// 4. Context -> Vocabulary consistency
// ================================================================

console.log("=== 4. CONTEXT → VOCABULARY CONSISTENCY ===\n");

const context = loadJson(CONTEXT_FILE);
const vocab = loadJson(VOCAB_FILE);

const vocabTerms = new Set();
for (const item of vocab["@graph"] || []) {
  if (item["@id"]?.startsWith("untp:")) vocabTerms.add(item["@id"]);
}

function collectContextMappings(obj, path = "") {
  const mappings = [];
  if (!obj || typeof obj !== "object") return mappings;
  if (Array.isArray(obj)) {
    obj.forEach((v, i) =>
      mappings.push(...collectContextMappings(v, `${path}[${i}]`))
    );
    return mappings;
  }
  for (const [key, val] of Object.entries(obj)) {
    if (key === "@id" && typeof val === "string" && val.startsWith("untp:"))
      mappings.push({ path, term: val });
    if (typeof val === "object")
      mappings.push(
        ...collectContextMappings(val, path ? `${path}.${key}` : key)
      );
  }
  return mappings;
}

const contextMappings = collectContextMappings(context);
let contextResolved = 0;
const contextMissing = [];
for (const { path, term } of contextMappings) {
  if (term.includes("#")) continue;
  if (vocabTerms.has(term)) contextResolved++;
  else contextMissing.push(`${term} (at ${path})`);
}
if (contextMissing.length === 0)
  pass(`All ${contextResolved} context terms resolve to ontology entries`);
else
  fail(
    `${contextMissing.length} context terms not found in ontology`,
    contextMissing
  );

console.log();

// ================================================================
// 5. Key name consistency (straight-through mapping)
// ================================================================

console.log(
  "=== 5. KEY NAME CONSISTENCY (context key = ontology local name) ===\n"
);

function checkStraightThrough(obj, path = "") {
  const issues = [];
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return issues;
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith("@")) continue;
    if (typeof val === "object" && val?.["@id"]?.startsWith("untp:")) {
      const localName = val["@id"].split(":")[1];
      if (key !== localName)
        issues.push({
          key,
          expected: localName,
          id: val["@id"],
          path: path ? `${path}.${key}` : key,
        });
    }
    if (typeof val === "object")
      issues.push(...checkStraightThrough(val, path ? `${path}.${key}` : key));
  }
  return issues;
}

const straightThroughIssues = checkStraightThrough(context);
if (straightThroughIssues.length === 0)
  pass("All context keys match their ontology local names");
else
  fail(
    `${straightThroughIssues.length} key name mismatches`,
    straightThroughIssues.map(
      (i) =>
        `key="${i.key}" maps to ${i.id} — expected key="${i.expected}" at ${i.path}`
    )
  );

console.log();

// ================================================================
// 6. JSON-LD expansion of samples against context
// ================================================================

console.log("=== 6. JSON-LD EXPANSION OF SAMPLES ===\n");

const contextData = loadJson(CONTEXT_FILE);
const localContexts = {
  "https://vocabulary.uncefact.org/untp/": contextData,
  "https://vocabulary.uncefact.org/untp/untp-context.jsonld": contextData,
};

const customLoader = async (url) => {
  if (localContexts[url])
    return { contextUrl: null, document: localContexts[url], documentUrl: url };
  return jsonldModule.documentLoaders.node()(url);
};

for (const { samples } of VALIDATIONS) {
  for (const sample of samples) {
    const samplePath = `${SAMPLE_DIR}/${sample}`;
    if (!existsSync(samplePath)) continue;
    const sampleData = loadJson(samplePath);
    const ctx = sampleData["@context"];
    if (!ctx) {
      skip(`${sample} (no @context)`);
      continue;
    }
    const hasUntpContext = []
      .concat(ctx)
      .some((c) => typeof c === "string" && c.includes("uncefact"));
    if (!hasUntpContext) {
      skip(`${sample} (no UNTP context reference)`);
      continue;
    }
    try {
      const expanded = await jsonldModule.expand(sampleData, {
        documentLoader: customLoader,
      });
      if (expanded?.length > 0)
        pass(`${sample} (${JSON.stringify(expanded).length} bytes expanded)`);
      else fail(`${sample} — expansion produced empty result`);
    } catch (e) {
      fail(`${sample} — expansion error: ${e.message}`);
    }
  }
}

console.log();

// ================================================================
// SUMMARY
// ================================================================

console.log("\u2500".repeat(60));
console.log(
  `Results: ${results.pass} passed, ${results.fail} failed, ${results.skip} skipped`
);
console.log("\u2500".repeat(60));
process.exit(results.fail > 0 ? 1 : 0);
