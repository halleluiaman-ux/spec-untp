const {describe, it, before, after} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const os = require('os');

const {
  parseH3Heading,
  extractLogoPath,
  shouldSkip,
  parseMarkdownFile,
  generateCategoryJS,
  generateIndexJS,
} = require('../index');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Create a temporary directory with a fixture Markdown file and return paths.
 */
function createFixtureDir(mdContent, filename = 'TestCategory.md') {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'carousel-test-'));
  const docsDir = path.join(tmpDir, 'docs', 'implementations');
  fs.mkdirSync(docsDir, {recursive: true});
  const filePath = path.join(docsDir, filename);
  fs.writeFileSync(filePath, mdContent, 'utf-8');
  return {tmpDir, filePath};
}

function removeFixtureDir(tmpDir) {
  fs.rmSync(tmpDir, {recursive: true, force: true});
}

// ---------------------------------------------------------------------------
// 1. parseH3Heading
// ---------------------------------------------------------------------------

describe('parseH3Heading', () => {
  it('parses a linked heading', () => {
    const result = parseH3Heading('### [Acme Corp](https://acme.example.com/)');
    assert.deepStrictEqual(result, {name: 'Acme Corp', customAnchor: null});
  });

  it('parses a plain heading', () => {
    const result = parseH3Heading('### Acme Corp');
    assert.deepStrictEqual(result, {name: 'Acme Corp', customAnchor: null});
  });

  it('parses a linked heading with a custom anchor', () => {
    const result = parseH3Heading(
      '### [Trust Provenance](https://trustprovenance.com/) {#trust-provenance}'
    );
    assert.deepStrictEqual(result, {
      name: 'Trust Provenance',
      customAnchor: 'trust-provenance',
    });
  });

  it('parses a plain heading with a custom anchor', () => {
    const result = parseH3Heading('### Plain Name {#custom-slug}');
    assert.deepStrictEqual(result, {
      name: 'Plain Name',
      customAnchor: 'custom-slug',
    });
  });

  it('returns null for non-H3 lines', () => {
    assert.strictEqual(parseH3Heading('## H2 heading'), null);
    assert.strictEqual(parseH3Heading('# H1 heading'), null);
    assert.strictEqual(parseH3Heading('Some paragraph text'), null);
    assert.strictEqual(parseH3Heading(''), null);
  });

  it('trims whitespace from names', () => {
    const result = parseH3Heading('###   Spaced Name  ');
    assert.deepStrictEqual(result, {name: 'Spaced Name', customAnchor: null});
  });
});

// ---------------------------------------------------------------------------
// 2. extractLogoPath
// ---------------------------------------------------------------------------

describe('extractLogoPath', () => {
  it('extracts path from Markdown image syntax', () => {
    const content =
      '| ![Alt text](/img/implementations/acme/logo.png) | Description |';
    assert.strictEqual(
      extractLogoPath(content),
      '/img/implementations/acme/logo.png'
    );
  });

  it('extracts path from HTML img tag', () => {
    const content =
      '| <img src="/img/implementations/acme/logo.png" alt="Logo"> | Description |';
    assert.strictEqual(
      extractLogoPath(content),
      '/img/implementations/acme/logo.png'
    );
  });

  it('returns null when no image is present', () => {
    const content = '| No logo here | Just text |';
    assert.strictEqual(extractLogoPath(content), null);
  });

  it('returns the first image when multiple are present', () => {
    const content = [
      '![First](/img/first.png)',
      '![Second](/img/second.png)',
    ].join('\n');
    assert.strictEqual(extractLogoPath(content), '/img/first.png');
  });

  it('prefers Markdown image over HTML image when Markdown comes first', () => {
    const content = [
      '![MD](/img/md.png)',
      '<img src="/img/html.png" alt="HTML">',
    ].join('\n');
    assert.strictEqual(extractLogoPath(content), '/img/md.png');
  });

  it('extracts HTML image when no Markdown image exists', () => {
    const content =
      'Some text\n<img src="/img/only-html.png" alt="Logo">\nMore text';
    assert.strictEqual(extractLogoPath(content), '/img/only-html.png');
  });
});

// ---------------------------------------------------------------------------
// 3. shouldSkip
// ---------------------------------------------------------------------------

describe('shouldSkip', () => {
  it('returns true when the name contains a skip marker', () => {
    assert.strictEqual(shouldSkip('Sample Company', ['Sample']), true);
  });

  it('performs case-insensitive matching', () => {
    assert.strictEqual(shouldSkip('sample company', ['Sample']), true);
    assert.strictEqual(shouldSkip('SAMPLE COMPANY', ['sample']), true);
  });

  it('returns false when the name does not match any marker', () => {
    assert.strictEqual(shouldSkip('Real Company', ['Sample']), false);
  });

  it('returns false when skip markers is empty', () => {
    assert.strictEqual(shouldSkip('Any Name', []), false);
  });

  it('matches partial strings within the name', () => {
    assert.strictEqual(shouldSkip('My Sample Org', ['Sample']), true);
  });

  it('handles multiple skip markers', () => {
    assert.strictEqual(shouldSkip('Test Corp', ['Sample', 'Test']), true);
    assert.strictEqual(shouldSkip('Real Corp', ['Sample', 'Test']), false);
  });
});

// ---------------------------------------------------------------------------
// 4. parseMarkdownFile
// ---------------------------------------------------------------------------

describe('parseMarkdownFile', () => {
  const FIXTURE_CONTENT = `---
sidebar_position: 30
title: Test Category
---

Some intro text.

## Implementation Register

| Organisation | Product | Status |
| --- | --- | --- |
| [Alpha](#alpha) | Alpha Product | active |

## Implementation Details

### [Alpha Corp](https://alpha.example.com/)

- Commitment date: 2024-01-01
- Country: Australia

| Logo | Statement |
| --- | --- |
| ![Alpha Logo](/img/implementations/alpha/logo.png) | Alpha builds great things |

#### Product Information

| Product | Description |
| --- | --- |
| Alpha v1 | Does stuff |

### [Beta Inc](https://beta.example.com/) {#beta-custom}

- Country: USA

| Logo | Statement |
| --- | --- |
| ![Beta Logo](/img/implementations/beta/logo.png) | Beta is awesome |

### Plain Gamma

- Country: UK

| Logo | Statement |
| --- | --- |
| <img src="/img/implementations/gamma/logo.png" alt="Gamma Logo"> | Gamma uses HTML |

### [Sample Company](https://sample.example.com/)

- Country: Sample

| Logo | Statement |
| --- | --- |
| ![Sample Logo](/img/implementations/sample/logo.png) | This should be skipped |

### [No Logo Corp](https://nologo.example.com/)

- Country: Nowhere

| Description |
| --- |
| This entry has no logo at all |
`;

  let tmpDir;
  let filePath;

  before(() => {
    const fixture = createFixtureDir(FIXTURE_CONTENT, 'TestCategory.md');
    tmpDir = fixture.tmpDir;
    filePath = fixture.filePath;
  });

  after(() => {
    removeFixtureDir(tmpDir);
  });

  it('extracts entries from linked headings with logos', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const alpha = entries.find(e => e.name === 'Alpha Corp');
    assert.ok(alpha, 'Expected to find Alpha Corp entry');
    assert.strictEqual(alpha.logo, '/img/implementations/alpha/logo.png');
    assert.ok(alpha.link.includes('/docs/implementations/TestCategory#'));
  });

  it('uses custom anchors when provided', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const beta = entries.find(e => e.name === 'Beta Inc');
    assert.ok(beta, 'Expected to find Beta Inc entry');
    assert.strictEqual(
      beta.link,
      '/docs/implementations/TestCategory#beta-custom'
    );
  });

  it('extracts entries from plain headings', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const gamma = entries.find(e => e.name === 'Plain Gamma');
    assert.ok(gamma, 'Expected to find Plain Gamma entry');
    assert.strictEqual(gamma.logo, '/img/implementations/gamma/logo.png');
  });

  it('skips entries matching skip markers', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const sample = entries.find(e => e.name === 'Sample Company');
    assert.strictEqual(sample, undefined, 'Sample Company should be skipped');
  });

  it('skips entries without logos', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const noLogo = entries.find(e => e.name === 'No Logo Corp');
    assert.strictEqual(noLogo, undefined, 'No Logo Corp should be skipped');
  });

  it('preserves order of entries', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const names = entries.map(e => e.name);
    assert.deepStrictEqual(names, ['Alpha Corp', 'Beta Inc', 'Plain Gamma']);
  });

  it('applies imageStyleOverrides when matching', () => {
    const overrides = {'Alpha Corp': {height: '50px'}};
    const entries = parseMarkdownFile(
      filePath,
      'TestCategory',
      ['Sample'],
      overrides
    );
    const alpha = entries.find(e => e.name === 'Alpha Corp');
    assert.deepStrictEqual(alpha.imageStyle, {height: '50px'});
  });

  it('does not add imageStyle when no override exists', () => {
    const entries = parseMarkdownFile(filePath, 'TestCategory', ['Sample'], {});
    const beta = entries.find(e => e.name === 'Beta Inc');
    assert.strictEqual(beta.imageStyle, undefined);
  });

  it('returns empty array for a missing file', () => {
    const entries = parseMarkdownFile(
      '/nonexistent/path/missing.md',
      'Missing',
      [],
      {}
    );
    assert.deepStrictEqual(entries, []);
  });

  it('returns empty array for an empty file', () => {
    const fixture = createFixtureDir('', 'Empty.md');
    try {
      const entries = parseMarkdownFile(fixture.filePath, 'Empty', [], {});
      assert.deepStrictEqual(entries, []);
    } finally {
      removeFixtureDir(fixture.tmpDir);
    }
  });
});

// ---------------------------------------------------------------------------
// 5. generateCategoryJS
// ---------------------------------------------------------------------------

describe('generateCategoryJS', () => {
  it('generates valid JS with the correct export name', () => {
    const entries = [
      {
        name: 'Acme Corp',
        link: '/docs/implementations/Software#acme-corp',
        logo: '/img/acme/logo.png',
      },
    ];
    const js = generateCategoryJS('softwareImplementors', entries);
    assert.ok(js.startsWith('export const softwareImplementors = ['));
    assert.ok(js.includes("name: 'Acme Corp'"));
    assert.ok(js.includes("link: '/docs/implementations/Software#acme-corp'"));
    assert.ok(js.includes("logo: '/img/acme/logo.png'"));
    assert.ok(js.endsWith('];\n'));
  });

  it('handles entries with imageStyle', () => {
    const entries = [
      {
        name: 'Styled Corp',
        link: '/docs/implementations/Software#styled-corp',
        logo: '/img/styled/logo.png',
        imageStyle: {height: '40px', objectFit: 'contain'},
      },
    ];
    const js = generateCategoryJS('softwareImplementors', entries);
    assert.ok(js.includes('imageStyle:'));
    assert.ok(js.includes('"height":"40px"'));
    assert.ok(js.includes('"objectFit":"contain"'));
  });

  it('escapes single quotes in names', () => {
    const entries = [
      {name: "O'Brien's Corp", link: '/docs/link', logo: '/img/logo.png'},
    ];
    const js = generateCategoryJS('testExport', entries);
    assert.ok(
      js.includes("O\\'Brien\\'s Corp"),
      'Single quotes should be escaped'
    );
    assert.ok(
      !js.includes("O'Brien's Corp"),
      'Unescaped quotes should not appear'
    );
  });

  it('handles multiple entries', () => {
    const entries = [
      {name: 'First', link: '/docs/first', logo: '/img/first.png'},
      {name: 'Second', link: '/docs/second', logo: '/img/second.png'},
      {name: 'Third', link: '/docs/third', logo: '/img/third.png'},
    ];
    const js = generateCategoryJS('multiExport', entries);
    // Count occurrences of entry blocks
    const nameMatches = js.match(/name:/g);
    assert.strictEqual(nameMatches.length, 3);
  });

  it('handles empty entries array', () => {
    const js = generateCategoryJS('emptyExport', []);
    assert.strictEqual(js, 'export const emptyExport = [\n\n];\n');
  });
});

// ---------------------------------------------------------------------------
// 6. generateIndexJS
// ---------------------------------------------------------------------------

describe('generateIndexJS', () => {
  it('generates correct re-export statements', () => {
    const files = ['Software.js', 'Registers.js'];
    const js = generateIndexJS(files);
    assert.ok(js.includes("export * from './Software';"));
    assert.ok(js.includes("export * from './Registers';"));
  });

  it('strips .js extension from re-exports', () => {
    const js = generateIndexJS(['Category.js']);
    assert.ok(
      js.includes("'./Category'"),
      'Should not contain .js in the import path'
    );
    assert.ok(!js.includes('.js'), 'No .js extension should remain');
  });

  it('handles a single file', () => {
    const js = generateIndexJS(['Only.js']);
    const lines = js.trim().split('\n');
    assert.strictEqual(lines.length, 1);
    assert.ok(lines[0].includes("export * from './Only'"));
  });

  it('handles multiple files', () => {
    const files = ['A.js', 'B.js', 'C.js'];
    const js = generateIndexJS(files);
    const lines = js.trim().split('\n');
    assert.strictEqual(lines.length, 3);
  });

  it('ends with a newline', () => {
    const js = generateIndexJS(['File.js']);
    assert.ok(js.endsWith('\n'));
  });
});

// ---------------------------------------------------------------------------
// 7. Integration test: parse actual Software.md
// ---------------------------------------------------------------------------

describe('Integration: parseMarkdownFile against Software.md', () => {
  const WEBSITE_DIR = path.resolve(__dirname, '..', '..', '..');
  const SOFTWARE_MD = path.join(
    WEBSITE_DIR,
    'docs',
    'implementations',
    'Software.md'
  );

  it('produces a non-empty array of entries', () => {
    // Use the same skip markers from the project config if present, otherwise empty
    let skipMarkers = [];
    let imageStyleOverrides = {};
    const configPath = path.join(
      WEBSITE_DIR,
      'implementations',
      'carousel-config.json'
    );
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        skipMarkers = config.skipMarkers || [];
        imageStyleOverrides = config.imageStyleOverrides || {};
      } catch {
        // Use defaults if config can't be parsed
      }
    }

    const entries = parseMarkdownFile(
      SOFTWARE_MD,
      'Software',
      skipMarkers,
      imageStyleOverrides
    );
    assert.ok(
      entries.length > 0,
      `Expected entries from Software.md, got ${entries.length}`
    );
  });

  it('every entry has name, link, and logo properties', () => {
    const entries = parseMarkdownFile(SOFTWARE_MD, 'Software', [], {});
    for (const entry of entries) {
      assert.ok(
        typeof entry.name === 'string' && entry.name.length > 0,
        `Entry should have a non-empty name, got: ${JSON.stringify(entry)}`
      );
      assert.ok(
        typeof entry.link === 'string' &&
          entry.link.startsWith('/docs/implementations/Software#'),
        `Entry link should start with correct prefix, got: ${entry.link}`
      );
      assert.ok(
        typeof entry.logo === 'string' && entry.logo.length > 0,
        `Entry should have a non-empty logo, got: ${JSON.stringify(entry)}`
      );
    }
  });

  it('Trust Provenance uses the custom anchor "trust-provenance"', () => {
    const entries = parseMarkdownFile(SOFTWARE_MD, 'Software', [], {});
    const tp = entries.find(e => e.name === 'Trust Provenance');
    assert.ok(tp, 'Expected to find Trust Provenance entry');
    assert.strictEqual(
      tp.link,
      '/docs/implementations/Software#trust-provenance',
      'Trust Provenance should use the custom anchor'
    );
  });
});
