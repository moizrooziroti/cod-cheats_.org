# Checkout price notes (internal)

**Last checked:** 2026-11-10  
**Method:** Automated affiliate-page fetch was blocked in the build environment; price taken from the live partner listing previously mirrored in `src/data/productPricing.ts`.

| Product path (affiliate redirect target) | Display on site |
|------------------------------------------|-----------------|
| `/products/mw4` (cheats) | **$35** / month label |
| `/products/hwid-spoofer` | **$35** (assumed same tier — confirm on listing) |
| `/products/skin-changer` | **$35** (assumed same tier — confirm on listing) |
| `/products/cloud-dma` | **$35** (assumed same tier — confirm on listing) |

All four catalog cards use `DISPLAY_PRICE_LABEL` from [`src/data/productPricing.ts`](../src/data/productPricing.ts). Re-verify in browser before launch and update `priceUsd` if checkout differs.
