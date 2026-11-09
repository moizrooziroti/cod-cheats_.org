# Missing product / asset inputs

Items not supplied in the master brief — **not invented on the site**:

1. **Per-product feature bullets** from the client (cheats ESP/aimbot/wallhack detail, spoofer scope, skin changer behavior, Cloud DMA setup).
2. **Screenshots** in `public/new-assets/` — folder not provided; product galleries use existing optimized WebP from `siteMedia.ts` as illustrations only.
3. **Semrush / Keyword Surfer** extra keyword export — volume/CPC in `keyword-map.md` are **estimates**.
4. **Real customer reviews** — `data/reviews.json` remains empty until you supply entries.

When feature text arrives, update [`src/data/products.ts`](../src/data/products.ts) and remove resolved lines from this file.
