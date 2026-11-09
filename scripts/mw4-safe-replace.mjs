import fs from 'node:fs';
import path from 'node:path';

const pairs = [
  ['cod-cheats.org', 'cod-cheats.org'],
  ['Call of Duty', 'Call of Duty'],
  ['call-of-duty-cheats', 'call-of-duty-cheats'],
  ['call-of-duty-spoofer', 'call-of-duty-spoofer'],
  ['CALL OF DUTY CHEATS', 'CALL OF DUTY CHEATS'],
  ['Call of Duty HWID spoofer', 'Call of Duty HWID spoofer'],
  ['how-call-of-duty-cheats-work', 'how-modern-warfare-4-cheats-work'],
  ['cod-esp-vs-aimbot-vs-wallhack', 'cod-esp-vs-aimbot-vs-wallhack'],
  ['how-to-choose-call-of-duty-cheats', 'how-to-choose-call-of-duty-cheats'],
  ['call-of-duty-cheat-settings-explained', 'call-of-duty-cheat-settings-explained'],
  ['what-is-an-hwid-spoofer-for-call-of-duty', 'what-is-an-hwid-spoofer-for-call-of-duty'],
  ['what-is-cloud-dma-for-call-of-duty', 'what-is-cloud-dma-for-call-of-duty'],
  ['buying-call-of-duty-cheats-checklist', 'buying-call-of-duty-cheats-checklist'],
  ['cod-esp-customization-tips', 'cod-esp-customization-tips'],
  ['cod-aimbot-settings-and-overaim', 'cod-aimbot-settings-and-overaim'],
  ['cod-wallhack-config-readability', 'cod-wallhack-config-readability'],
  ['call-of-duty-cheat-troubleshooting-basics', 'call-of-duty-cheat-troubleshooting-basics'],
  ['call-of-duty-cheat-performance-and-pc-load', 'call-of-duty-cheat-performance-and-pc-load'],
  ['Call of Duty cheats', 'Call of Duty cheats'],
  ['Call of Duty cheat', 'Call of Duty cheat'],
  ['Call of Duty ESP', 'Call of Duty ESP'],
  ['Call of Duty aimbot', 'Call of Duty aimbot'],
  ['Call of Duty wallhack', 'Call of Duty wallhack'],
  ['Call of Duty cheats', 'Call of Duty cheats'],
  ['for Call of Duty', 'for Call of Duty'],
  ['in Call of Duty', 'in Call of Duty'],
  ['Call of Duty ', 'Call of Duty '],
  ['cod-Cheats Team', 'cod-Cheats Team'],
  ['Call of Duty Cheats', 'Call of Duty Cheats'],
  ['cod-cheats', 'cod-cheats'],
  ['the game's publisher', "the game's publisher"],
  ['listed', 'listed'],
  ['Listed', 'Listed'],
];

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'starwind') walk(p, acc);
    else if (/\.(ts|astro|mjs|json|css|txt)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const roots = [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'scripts'), path.join(process.cwd(), 'public')];
let n = 0;
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    let s = fs.readFileSync(file, 'utf8');
    const before = s;
    for (const [a, b] of pairs) s = s.split(a).join(b);
    if (s !== before) {
      fs.writeFileSync(file, s, 'utf8');
      n++;
    }
  }
}
console.log('Updated', n, 'files');
