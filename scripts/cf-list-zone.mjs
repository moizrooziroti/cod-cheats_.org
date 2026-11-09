import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const cfg = path.join(os.homedir(), 'AppData', 'Roaming', 'xdg.config', '.wrangler', 'config', 'default.toml');
const text = fs.readFileSync(cfg, 'utf8');
const match = text.match(/oauth_token\s*=\s*"([^"]+)"/);
if (!match) {
  console.error('No wrangler oauth_token in config');
  process.exit(1);
}

const token = match[1];
const name = process.argv[2] ?? 'cod-cheats.org';
const url =
  name === '--all'
    ? 'https://api.cloudflare.com/client/v4/zones?per_page=50'
  : `https://api.cloudflare.com/client/v4/zones?name=${encodeURIComponent(name)}`;
const res = await fetch(url, {
  headers: { Authorization: `Bearer ${token}` },
});
const data = await res.json();
console.log(JSON.stringify(data.result ?? data.errors ?? data, null, 2));
