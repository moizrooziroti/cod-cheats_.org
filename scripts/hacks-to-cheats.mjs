/**
 * Site-wide: hacks → cheats (keeps wallhack / wallhacks unchanged).
 * Run: node scripts/hacks-to-cheats.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const EXT = new Set(['.ts', '.astro', '.mjs', '.md', '.json', '.css', '.txt', '.svg', '.toml']);

const WALL = '\u0000WALLHACK\u0000';
const WALLS = '\u0000WALLHACKS\u0000';

function protectWallhack(s) {
  return s
    .replace(/\bwallhacks\b/gi, (m) => (m === m.toUpperCase() ? WALLS : WALL + 'S'))
    .replace(/\bwallhack\b/gi, () => WALL);
}

function restoreWallhack(s) {
  return s.replaceAll(WALLS, 'wallhacks').replaceAll(WALL + 'S', 'wallhacks').replaceAll(WALL, 'wallhack');
}

function replaceHackWords(s) {
  let out = protectWallhack(s);
  const pairs = [
    [/\bHACKS\b/g, 'CHEATS'],
    [/\bHacks\b/g, 'Cheats'],
    [/\bhacks\b/g, 'cheats'],
    [/\bHACK\b/g, 'CHEAT'],
    [/\bHack\b/g, 'Cheat'],
    [/\bhack\b/g, 'cheat'],
  ];
  for (const [re, rep] of pairs) out = out.replace(re, rep);
  return restoreWallhack(out);
}

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (EXT.has(path.extname(ent.name))) files.push(p);
  }
  return files;
}

const skipFiles = new Set([
  path.join(root, 'scripts', 'hacks-to-cheats.mjs'),
  path.join(root, 'scripts', 'rebrand-cod.mjs'),
  path.join(root, 'src', 'config', 'checkout.ts'), // BUY key rename done manually
]);

let changed = 0;
for (const file of walk(root).concat(walk(path.join(root, 'docs')))) {
  if (skipFiles.has(file)) continue;
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (rel.startsWith('scripts/hacks-to-cheats')) continue;
  let before = fs.readFileSync(file, 'utf8');
  let after = replaceHackWords(before);
  if (rel === 'src/config/checkout.ts') continue;

  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

// checkout: rename BUY_URLS.hacks → cheats (code only; URL unchanged)
const checkout = path.join(root, 'src/config/checkout.ts');
let chk = fs.readFileSync(checkout, 'utf8');
chk = chk.replace(/\bhacks:\s/g, 'cheats: ');
chk = chk.replace(/BUY_URLS\.hacks/g, 'BUY_URLS.cheats');
chk = chk.replace(/BuyProduct = keyof typeof BUY_URLS/, 'BuyProduct = keyof typeof BUY_URLS');
chk = chk.replace(/PRIMARY_BUY_URL = BUY_URLS\.hacks/, 'PRIMARY_BUY_URL = BUY_URLS.cheats');
fs.writeFileSync(checkout, chk, 'utf8');
changed++;

// checkout-redirects if mw4 key named hacks - read file

console.log(`hacks→cheats: ${changed} files updated.`);
