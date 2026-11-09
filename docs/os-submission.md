# OS review form — copy/paste (cod-cheats.org)

## 1 · Live website

| Field | Value |
|-------|--------|
| **Live URL** | `https://cod-cheats.org/` |
| **Sitemap URL** | `https://cod-cheats.org/sitemap.xml` |
| **robots.txt URL** | `https://cod-cheats.org/robots.txt` |
| **SEO audit score** | `100` (Lighthouse SEO on home build — see `docs/lighthouse-home.json`) |

## 2 · On-page SEO (homepage)

| Field | Value |
|-------|--------|
| **Homepage SEO title** | Call of Duty ESP, Aimbot & wallhack Features |
| **Meta description** | Overview of Call of Duty ESP, aimbot, and wallhack-style tools plus HWID spoofer, skin changer, and Cloud DMA — four products on cod-cheats.org. |
| **Homepage H1** | CALL OF DUTY ESP & AIMBOT FEATURES |

## 3 · Keyword focus

**Primary keyword:** `call of duty cheats`

**Target audience / market:** US and EU Call of Duty PC players researching ESP, aim assist, HWID spoofer, skin changer, or Cloud DMA before affiliate checkout.

**Supporting keywords (min 2):**
```
call of duty aimbot, call of duty esp, call of duty wallhack, hwid spoofer call of duty, call of duty skin changer, cloud dma call of duty
```

## 4 · Why this website is good

**Why it will rank and convert (80+ words):**

cod-cheats.org is a four-product Call of Duty hub: software cheats (ESP, aimbot, wallhack-style), HWID spoofer, skin changer, and Cloud DMA. The home page is an overview; each product has its own URL, title, meta description, and H1. Fifteen articles and 36+ forum threads add internal links without keyword cannibalization (see `docs/keyword-map.md`). Buy buttons use on-site `/go/*/` paths with clear affiliate disclosure—no “undetected” or fake review claims. Shoppers read guides, pick the right product card, then checkout on the partner site.

**Key pages:**
```
/
/products/call-of-duty-cheats/
/products/
/articles/
/forums/
/faq/
```

**Notes for OS:**

Deploy `dist/` via Cloudflare Worker assets (`wrangler.toml`). `public/_redirects` maps `/go/cheats/` (and three other products) to partner checkout—no `mw4` or old domain URLs in page HTML. Partner product id stays server-side only. If live domain returns errors, redeploy latest build and confirm custom domain on the Worker.

## 5 · Code & files

**Git repository URL:** `https://github.com/moizrooziroti/cod-cheats_.org`

**Website files:** Zip the `dist/` folder after `npm run build` (or attach repo; build output is reproducible from source).

## 6 · QA checklist (confirm all)

- [x] Full build passes; `scripts/qa-html.mjs` — title, meta, H1, alt, banned claims.
- [x] 69 routes return HTTP 200 from local `dist` serve (smoke test).
- [x] `robots.txt` and `sitemap.xml` generated in `dist/` for `cod-cheats.org` (68 indexable URLs).
- [x] Per-page title, meta description, single H1 (automated QA).
- [x] Four products → `/go/cheats/`, `/go/hwid-spoofer/`, `/go/skin-changer/`, `/go/cloud-dma/` on cod-cheats.org.
- [x] Images have `alt` text; local optimize step in build (hero/gallery CDN until `new-assets` supplied).
- [x] No placeholder lorem; no fake reviews; Call of Duty rebrand throughout (no mw4-hacks domain in copy).
