#!/usr/bin/env node
/**
 * Pre-build content validation for blog posts.
 * - Fails if any markdown image alt text contains unescaped double quotes
 * - Warns about posts with draft: true
 * - Fails if a local image (markdown, <img>, or frontmatter src) doesn't exist
 */
import { existsSync, readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';

const BLOG_DIR = new URL('../src/content/blog', import.meta.url).pathname;
const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;

// Collect image paths from ![alt](path "title"), <img src="path">, and frontmatter `src: path`
function imagePaths(content) {
  const paths = [];
  const patterns = [
    /!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g,
    /<img[^>]*\ssrc=["']([^"']+)["']/g,
    /^\s*src:\s*["']?([^"'\n]+?)["']?\s*$/gm,
  ];
  for (const re of patterns) {
    for (const m of content.matchAll(re)) paths.push(m[1].trim());
  }
  return paths;
}

function resolveLocal(path, file) {
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) return null; // remote / inline
  const clean = decodeURIComponent(path.split(/[?#]/)[0]);
  return clean.startsWith('/') ? join(PUBLIC_DIR, clean) : join(BLOG_DIR, dirname(file), clean);
}
const files = readdirSync(BLOG_DIR, { recursive: true }).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

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

  // Check local image files exist
  for (const path of imagePaths(content)) {
    const resolved = resolveLocal(path, file);
    if (resolved && !existsSync(resolved)) {
      console.error(`❌ [${file}] Missing image: ${path}`);
      errors++;
    }
  }
}

if (drafts.length) {
  console.warn(`⚠️  Draft posts found (will not be published if draft:true):`);
  drafts.forEach((f) => console.warn(`   - ${f}`));
}

if (errors > 0) {
  console.error(`\nContent validation failed with ${errors} error(s). Fix the issues above before building.`);
  process.exit(1);
}

console.log(`✅ Content validation passed (${files.length} posts checked).`);
