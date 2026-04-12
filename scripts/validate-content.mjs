#!/usr/bin/env node
/**
 * Pre-build content validation for blog posts.
 * - Fails if any markdown image alt text contains unescaped double quotes
 * - Warns about posts with draft: true
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const BLOG_DIR = fileURLToPath(new URL('../src/content/blog', import.meta.url));
const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

let errors = 0;
const drafts = [];

for (const file of files) {
  const content = readFileSync(join(BLOG_DIR, file), 'utf8');
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

  // Warn on draft posts
  if (/^draft:\s*true\s*$/m.test(frontmatter)) {
    drafts.push(file);
  }

  // Extract alt text from markdown images and check for unescaped double quotes.
  // Matches ![alt text](url) — captures only the alt portion between [ and ](
  const imageAltRegex = /!\[([^\]]*)\]\(/g;
  let match;
  while ((match = imageAltRegex.exec(content)) !== null) {
    const alt = match[1];
    // Flag unescaped " — i.e. a " not preceded by a backslash
    if (/(?<!\\)"/.test(alt)) {
      console.error(`❌ [${file}] Unescaped double quote in image alt text: ![${alt.slice(0, 50)}](`);
      errors++;
    }
  }
}

if (drafts.length) {
  console.warn(`⚠️  Draft posts found (will not be published if draft:true):`);
  drafts.forEach((f) => console.warn(`   - ${f}`));
}

if (errors > 0) {
  console.error(`\nContent validation failed with ${errors} error(s). Fix alt text before building.`);
  process.exit(1);
}

console.log(`✅ Content validation passed (${files.length} posts checked).`);
