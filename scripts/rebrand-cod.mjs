/**
 * One-time mechanical rebrand MW4 site copy → Call of Duty / cod-cheats.org
 * Run: node scripts/rebrand-cod.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd());
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const EXT = new Set(['.ts', '.astro', '.mjs', '.md', '.json', '.css', '.txt', '.toml']);

const slugMap = [
  ['modern-warfare-4-hacks', 'call-of-duty-cheats'],
  ['modern-warfare-4-spoofer', 'call-of-duty-spoofer'],
  ['modern-warfare-4-skin-changer', 'call-of-duty-skin-changer'],
  ['how-modern-warfare-4-hacks-work', 'how-call-of-duty-cheats-work'],
  ['mw4-esp-vs-aimbot-vs-wallhack', 'cod-esp-vs-aimbot-vs-wallhack'],
  ['how-to-choose-mw4-cheats', 'how-to-choose-call-of-duty-cheats'],
  ['mw4-cheat-settings-explained', 'call-of-duty-cheat-settings-explained'],
  ['what-is-an-hwid-spoofer-for-mw4', 'what-is-an-hwid-spoofer-for-call-of-duty'],
  ['mw4-skin-changer-explained', 'call-of-duty-skin-changer-explained'],
  ['what-is-cloud-dma-for-modern-warfare-4', 'what-is-cloud-dma-for-call-of-duty'],
  ['buying-mw4-hacks-checklist', 'buying-call-of-duty-cheats-checklist'],
  ['mw4-esp-customization-tips', 'cod-esp-customization-tips'],
  ['mw4-aimbot-settings-and-overaim', 'cod-aimbot-settings-and-overaim'],
  ['mw4-wallhack-config-readability', 'cod-wallhack-config-readability'],
  ['mw4-cheat-troubleshooting-basics', 'call-of-duty-cheat-troubleshooting-basics'],
  ['mw4-cheat-performance-and-pc-load', 'call-of-duty-cheat-performance-and-pc-load'],
  ['mw4-cheat-vocabulary', 'call-of-duty-cheat-vocabulary'],
];

const textReplacements = [
  ['mw4-hacks.org', 'cod-cheats.org'],
  ['MW4 hacks.org', 'cod-cheats.org'],
  ['Modern Warfare 4', 'Call of Duty'],
  ['modern warfare 4', 'call of duty'],
  ['MODERN WARFARE 4 HACKS', 'CALL OF DUTY CHEATS'],
  ['Modern Warfare 4 hacks', 'Call of Duty cheats'],
  ['MW4 hacks', 'Call of Duty cheats'],
  ['MW4 hack', 'Call of Duty cheat'],
  ['mw4 hacks', 'call of duty cheats'],
  ['mw4 hack', 'call of duty cheat'],
  ['MW4 HWID', 'Call of Duty HWID'],
  ['MW4 Skin Changer', 'Call of Duty Skin Changer'],
  ['MW4 skin changer', 'Call of Duty skin changer'],
  ['MW4 skin', 'Call of Duty skin'],
  ['MW4 esp', 'COD esp'],
  ['MW4 ESP', 'Call of Duty ESP'],
  ['mw4 esp', 'cod esp'],
  ['MW4 aimbot', 'Call of Duty aimbot'],
  ['mw4 aimbot', 'call of duty aimbot'],
  ['MW4 wallhack', 'Call of Duty wallhack'],
  ['MW4 spoofer', 'Call of Duty spoofer'],
  ['MW4 DMA', 'Call of Duty Cloud DMA'],
  ['mw4 dma', 'call of duty cloud dma'],
  ['MW4 player', 'Call of Duty player'],
  ['MW4 update', 'Call of Duty update'],
  ['MW4-specific', 'Call of Duty'],
  ['for MW4', 'for Call of Duty'],
  ['on MW4', 'on Call of Duty'],
  ['MW4 Forums', 'Call of Duty forums'],
  ['MW4 forums', 'Call of Duty forums'],
  ['MW4/', 'Call of Duty '],
  ['MW4 ', 'Call of Duty '],
  ['MW4.', 'Call of Duty.'],
  ['MW4,', 'Call of Duty,'],
  ['MW4-', 'cod-'],
  ['mw4-hacks', 'cod-cheats'],
  ['zadeyoVisuals', 'cheatVisuals'],
  ['zadeyoMisc', 'cheatMisc'],
  ['Zadeyo', 'Partner checkout'],
];

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (EXT.has(path.extname(ent.name))) files.push(p);
  }
  return files;
}

function transform(file, content) {
  if (file.replace(/\\/g, '/').endsWith('src/config/checkout.ts')) {
    return content;
  }
  let out = content;
  for (const [a, b] of slugMap) out = out.split(a).join(b);
  for (const [a, b] of textReplacements) out = out.split(a).join(b);
  return out;
}

const files = walk(root).filter((f) => !f.includes('rebrand-cod.mjs'));
let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = transform(file, before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}
console.log(`Rebrand touched ${changed} files.`);
