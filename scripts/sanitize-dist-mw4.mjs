import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');

const REPLACEMENTS = [
  [/seo-media-library\/mw4\//g, 'seo-media-library/call-of-duty/'],
  [/zadeyo-mw4-/g, 'zadeyo-cod-'],
  [/levo-mw4-/g, 'levo-cod-'],
  [/new-cod-mw4-cheat/g, 'new-cod-cheat'],
  [/cod-mw4-cheat/g, 'cod-cheat'],
];

function walkHtml(dir, list = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtml(p, list);
    else if (ent.name.endsWith('.html') || ent.name === 'rss.xml') list.push(p);
  }
  return list;
}

let touched = 0;
for (const file of walkHtml(dist)) {
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [pattern, replacement] of REPLACEMENTS) {
    next = next.replace(pattern, replacement);
  }
  if (next !== text) {
    fs.writeFileSync(file, next);
    touched++;
  }
}

console.log(`sanitize-dist-mw4: updated ${touched} file(s) in dist/`);
