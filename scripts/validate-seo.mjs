import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');

function walk(dir) {
  let files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (entry === 'index.html') files.push(full);
  }
  return files;
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '—')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = walk(distDir).sort();

for (const file of files) {
  const html = readFileSync(file, 'utf-8');
  const rel = file.replace(distDir, '').replace(/\\/g, '/');
  const title = extract(html, /<title>([^<]*)<\/title>/);
  const description = extract(html, /<meta name="description" content="([^"]*)"/);
  const canonical = extract(html, /<link rel="canonical" href="([^"]*)"/);
  const lang = extract(html, /<html lang="([^"]*)"/);
  const robots = extract(html, /<meta name="robots" content="([^"]*)"/);
  const ogImage = extract(html, /<meta property="og:image" content="([^"]*)"/);
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;

  console.log(`\n=== ${rel} ===`);
  console.log(`lang: ${lang} | robots: ${robots}`);
  console.log(`title (${title?.length} chars): ${title}`);
  console.log(`description (${description?.length} chars): ${description}`);
  console.log(`canonical: ${canonical}`);
  console.log(`og:image: ${ogImage}`);
  console.log(`JSON-LD blocks: ${jsonLdCount}`);

  if (rel.includes('/blog/') && rel !== '/blog/index.html' && !rel.endsWith('/blog/index.html')) {
    const article = html.split('<article')[1] || '';
    const text = stripTags(article);
    const wordCount = text.split(' ').filter(Boolean).length;
    console.log(`article body word count (approx, incl. headings): ${wordCount}`);
  }
}
