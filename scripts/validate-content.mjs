#!/usr/bin/env node
/**
 * Pre-build content validation for blog posts.
 * - Fails if any markdown image alt text contains unescaped double quotes
 * - Warns about posts with draft: true
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BLOG_DIR = new URL('../src/content/blog', import.meta.url).pathname;
const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

let errors = 0;
const drafts = [];

for (const file of files) {
  const content = readFileSync(join(BLOG_DIR, file), 'utf8');

  // Warn on draft posts
  if (/^draft:\s*true/m.test(content)) {
    drafts.push(file);
  }

  // Check for unescaped double quotes inside markdown image alt text: ![alt](url)
  const imageAltRegex = /!\[([^\]]*)"([^\]]*)\]\(/g;
  let match;
  while ((match = imageAltRegex.exec(content)) !== null) {
    console.error(`❌ [${file}] Unescaped double quote in image alt text: ${match[0].slice(0, 60)}`);
    errors++;
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
