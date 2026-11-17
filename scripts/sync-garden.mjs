// Snapshot the public digital-garden notes (#471).
// Reads front matter from Nerajno/digital_garden/_notes/Public and writes
// src/data/garden-notes.json, which /digital_garden renders and counts from.
// Run: npm run garden:sync   (set GITHUB_TOKEN to avoid API rate limits)
import { writeFileSync } from 'node:fs';

const REPO = 'Nerajno/digital_garden';
const DIR = '_notes/Public';
const SITE = 'https://garden.developingdvlpr.com';
const OUT = new URL('../src/data/garden-notes.json', import.meta.url);
const STAGES = ['seedling', 'budding', 'evergreen'];

const headers = { 'User-Agent': 'portfolio-garden-sync' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function get(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
}

// Flat `key: value` front matter only (what the garden uses).
function frontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    data[kv[1]] = kv[2].trim().replace(/^(["'])(.*)\1$/, '$2');
  }
  return data;
}

// Jekyll `/note/:title` slug from the file name.
const slugify = (name) =>
  name.replace(/\.md$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const files = await (await get(`https://api.github.com/repos/${REPO}/contents/${encodeURIComponent(DIR).replace(/%2F/g, '/')}`)).json();
const notes = [];
for (const file of files.filter((f) => f.type === 'file' && f.name.endsWith('.md'))) {
  const fm = frontMatter(await (await get(file.download_url)).text());
  if (fm.feed === 'hide' || !STAGES.includes(fm.stage)) continue;
  notes.push({
    title: fm.title || file.name.replace(/\.md$/, ''),
    stage: fm.stage,
    planted: fm.date || null,
    tended: fm.tended || fm.date || null,
    summary: fm.summary || null,
    url: `${SITE}/note/${slugify(file.name)}`,
  });
}
notes.sort((a, b) => String(b.tended).localeCompare(String(a.tended)));

writeFileSync(OUT, JSON.stringify({ source: `${REPO}/${DIR}`, syncedAt: new Date().toISOString().slice(0, 10), notes }, null, 2) + '\n');
console.log(`garden:sync wrote ${notes.length} notes`);
