const fs = require('fs');
const path = require('path');
const {createSlugger} = require('@docusaurus/utils');

const PLUGIN_NAME = 'carousel-generator';
const DOCS_DIR = 'docs/implementations';
const OUTPUT_DIR = '.generated/implementations';
const CONFIG_FILE = 'implementations/carousel-config.json';

/** Regex to match Markdown image syntax: ![alt](path) */
const MD_IMAGE_REGEX = /!\[[^\]]*\]\(([^)]+)\)/;

/** Regex to match HTML img tag: <img src="path" ...> */
const HTML_IMG_REGEX = /<img[^>]+src=["']([^"']+)["'][^>]*>/;

/** Regex to match linked H3 heading: ### [Name](url) */
const LINKED_H3_REGEX = /^###\s+\[([^\]]+)\]\([^)]+\)/;

/** Regex to match plain H3 heading: ### Name */
const PLAIN_H3_REGEX = /^###\s+(.+)/;

/** Regex to match custom anchor ID: {#custom-slug} */
const CUSTOM_ANCHOR_REGEX = /\s*\{#([^}]+)\}\s*$/;

function warn(message) {
  console.warn(`[${PLUGIN_NAME}] ${message}`);
}

/**
 * Extract the organisation name and custom anchor (if any) from an H3 heading line.
 */
function parseH3Heading(line) {
  let customAnchor = null;
  let cleanedLine = line;

  const anchorMatch = line.match(CUSTOM_ANCHOR_REGEX);
  if (anchorMatch) {
    customAnchor = anchorMatch[1];
    cleanedLine = line.replace(CUSTOM_ANCHOR_REGEX, '');
  }

  const linkedMatch = cleanedLine.match(LINKED_H3_REGEX);
  if (linkedMatch) {
    return {name: linkedMatch[1].trim(), customAnchor};
  }

  const plainMatch = cleanedLine.match(PLAIN_H3_REGEX);
  if (plainMatch) {
    return {name: plainMatch[1].trim(), customAnchor};
  }

  return null;
}

/**
 * Extract the first logo image path from a section of Markdown content.
 * Supports both Markdown ![alt](path) and HTML <img src="path"> syntax.
 */
function extractLogoPath(sectionContent) {
  const mdMatch = sectionContent.match(MD_IMAGE_REGEX);
  if (mdMatch) {
    return mdMatch[1];
  }

  const htmlMatch = sectionContent.match(HTML_IMG_REGEX);
  if (htmlMatch) {
    return htmlMatch[1];
  }

  return null;
}

/**
 * Check whether an org name matches any of the skip markers (case-insensitive).
 */
function shouldSkip(name, skipMarkers) {
  const lowerName = name.toLowerCase();
  return skipMarkers.some(marker => lowerName.includes(marker.toLowerCase()));
}

/**
 * Parse a Markdown implementation file and extract carousel entries.
 */
function parseMarkdownFile(
  filePath,
  categoryName,
  skipMarkers,
  imageStyleOverrides
) {
  if (!fs.existsSync(filePath)) {
    warn(`Markdown file not found: ${filePath} — skipping category.`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const entries = [];
  const slugger = createSlugger();

  // Split content into sections at H3 boundaries
  const sections = [];
  let currentSection = null;

  for (const line of lines) {
    if (line.startsWith('### ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {headingLine: line, content: ''};
    } else if (currentSection) {
      currentSection.content += line + '\n';
    }
  }
  if (currentSection) {
    sections.push(currentSection);
  }

  for (const section of sections) {
    const heading = parseH3Heading(section.headingLine);
    if (!heading) {
      continue;
    }

    const {name, customAnchor} = heading;

    if (shouldSkip(name, skipMarkers)) {
      continue;
    }

    const logoPath = extractLogoPath(section.content);
    if (!logoPath) {
      warn(
        `No logo found for "${name}" in ${path.basename(
          filePath
        )} — skipping entry.`
      );
      continue;
    }

    const anchor = customAnchor || slugger.slug(name);
    const link = `/docs/implementations/${categoryName}#${anchor}`;

    const entry = {name, link, logo: logoPath};

    if (imageStyleOverrides[name]) {
      entry.imageStyle = imageStyleOverrides[name];
    }

    entries.push(entry);
  }

  return entries;
}

/**
 * Generate the JS content for a category file.
 */
function generateCategoryJS(exportName, entries) {
  const entriesStr = entries
    .map(entry => {
      let obj = `    name: '${entry.name.replace(/'/g, "\\'")}',\n`;
      obj += `    link: '${entry.link}',\n`;
      obj += `    logo: '${entry.logo}',`;
      if (entry.imageStyle) {
        obj += `\n    imageStyle: ${JSON.stringify(entry.imageStyle)},`;
      }
      return `  {\n${obj}\n  }`;
    })
    .join(',\n');

  return `export const ${exportName} = [\n${entriesStr}\n];\n`;
}

/**
 * Generate the index.js barrel file that re-exports all categories.
 */
function generateIndexJS(categoryFiles) {
  return (
    categoryFiles
      .map(filename => `export * from './${filename.replace('.js', '')}';`)
      .join('\n') + '\n'
  );
}

module.exports = function carouselGeneratorPlugin(context) {
  const siteDir = context.siteDir;

  return {
    name: PLUGIN_NAME,

    async loadContent() {
      const configPath = path.join(siteDir, CONFIG_FILE);

      if (!fs.existsSync(configPath)) {
        throw new Error(
          `[${PLUGIN_NAME}] Config file not found: ${configPath}. ` +
            'This file is required for carousel generation.'
        );
      }

      let config;
      try {
        config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      } catch (err) {
        throw new Error(
          `[${PLUGIN_NAME}] Failed to parse config file: ${configPath}. ${err.message}`
        );
      }

      const {categories, skipMarkers = [], imageStyleOverrides = {}} = config;
      const outputDir = path.join(siteDir, OUTPUT_DIR);

      // Ensure output directory exists and is clean
      if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, {recursive: true});
      }
      fs.mkdirSync(outputDir, {recursive: true});

      const categoryFiles = [];
      let totalEntries = 0;

      for (const [mdFilename, exportName] of Object.entries(categories)) {
        const mdPath = path.join(siteDir, DOCS_DIR, mdFilename);
        const categoryName = mdFilename.replace('.md', '');

        const entries = parseMarkdownFile(
          mdPath,
          categoryName,
          skipMarkers,
          imageStyleOverrides
        );

        const jsFilename = `${categoryName}.js`;
        const jsContent = generateCategoryJS(exportName, entries);
        fs.writeFileSync(path.join(outputDir, jsFilename), jsContent, 'utf-8');

        categoryFiles.push(jsFilename);
        totalEntries += entries.length;

        if (entries.length === 0) {
          warn(`Category "${categoryName}" produced 0 entries.`);
        }
      }

      // Generate barrel index.js
      const indexContent = generateIndexJS(categoryFiles);
      fs.writeFileSync(path.join(outputDir, 'index.js'), indexContent, 'utf-8');

      console.log(
        `[${PLUGIN_NAME}] Generated ${totalEntries} entries across ${categoryFiles.length} categories.`
      );
    },
  };
};

// Export internals for testing
module.exports.parseH3Heading = parseH3Heading;
module.exports.extractLogoPath = extractLogoPath;
module.exports.shouldSkip = shouldSkip;
module.exports.parseMarkdownFile = parseMarkdownFile;
module.exports.generateCategoryJS = generateCategoryJS;
module.exports.generateIndexJS = generateIndexJS;
