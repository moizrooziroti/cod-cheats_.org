/**
 * One primary keyword + meta description per article URL (≤155 chars; no overlap with product H1 targets).
 */

export interface ArticleSeoEntry {
  keyword: string;
  description: string;
}

export const ARTICLE_SEO: Record<string, ArticleSeoEntry> = {
  'how-call-of-duty-cheats-work': {
    keyword: 'How Call of Duty Cheats Work on PC | Loader & ESP Guide 2026',
    description:
      'How Call of Duty cheats work: ESP, Call of Duty aimbot, wallhack loaders, and patches. Open our cheats product and buy on checkout.',
  },
  'cod-esp-vs-aimbot-vs-wallhack': {
    keyword: 'Call of Duty ESP vs Aimbot vs wallhack | Compare Feature Guide',
    description:
      'Call of Duty ESP vs aimbot vs wallhack before you pay on Call of Duty. Compare listings and toggles, then buy from the Call of Duty cheats card.',
  },
  'how-to-choose-call-of-duty-cheats': {
    keyword: 'Call of Duty Buy Guide 2026 | How to Choose ESP, Aimbot, DMA',
    description:
      'Choose Call of Duty cheats: software ESP and aimbot vs Cloud DMA. Pick one card on cod-cheats.org, then open partner checkout.',
  },
  'call-of-duty-cheat-settings-explained': {
    keyword: 'Call of Duty Cheat Settings Guide',
    description:
      'Call of Duty cheat settings: aimbot FOV, smoothing, bones, ESP distance. Confirm toggles on the Call of Duty cheats listing.',
  },
  'what-is-an-hwid-spoofer-for-call-of-duty': {
    keyword: 'Call of Duty HWID Spoofer Meaning',
    description:
      'Call of Duty HWID spoofer meaning for Call of Duty PCs — not ESP. Open the spoofer product when that is the buy you need.',
  },
  'call-of-duty-skin-changer-explained': {
    keyword: 'Call of Duty Skin Changer Guide',
    description:
      'Call of Duty skin changer: camos and cosmetics only on Call of Duty. Use the skin changer product, not the combat cheats card.',
  },
  'what-is-cloud-dma-for-call-of-duty': {
    keyword: 'Call of Duty Cloud DMA Explained',
    description:
      'Cloud DMA for Call of Duty: hardware path vs ESP loaders. Read tradeoffs, then open Cloud DMA checkout when it fits.',
  },
  'buying-call-of-duty-cheats-checklist': {
    keyword: 'Cheats Checklist 2026 | Buy Call of Duty Safely on Partner Checkout',
    description:
      'Buy Call of Duty cheats safely with this cheats checklist: price, key delivery, refund wording, and account risk. Start on /products/, finish on partner checkout.',
  },
  'cod-esp-customization-tips': {
    keyword: 'Call of Duty ESP Setup & Customization',
    description:
      'Call of Duty ESP setup: colors and distance caps for cleaner Call of Duty overlays. Buy ESP features from the Call of Duty cheats listing.',
  },
  'cod-aimbot-settings-and-overaim': {
    keyword: 'Aimbot Settings for Call of Duty 2026 | FOV, Smoothing & Ping',
    description:
      'Aimbot settings for missed shots on Call of Duty: tighten FOV, smoothing, and ping habits before checkout. Match cheats listing vocabulary, then buy on partner site.',
  },
  'cod-wallhack-config-readability': {
    keyword: 'Call of Duty wallhack Settings',
    description:
      'Call of Duty wallhack config for readable lines on Call of Duty maps. Profile outlines, then confirm wallhack on checkout.',
  },
  'software-cheats-vs-cloud-dma-tradeoffs': {
    keyword: 'Call of Duty Software Cheats vs DMA',
    description:
      'Call of Duty software cheats vs Cloud DMA — cost and FPS. Pick Call of Duty cheats or Cloud DMA on cod-cheats.org.',
  },
  'call-of-duty-cheat-troubleshooting-basics': {
    keyword: 'Call of Duty Cheat Not Working Fix',
    description:
      'Call of Duty cheat not working after a patch? Display mode, admin rights, new builds. Re-check the cheats listing first.',
  },
  'call-of-duty-cheat-performance-and-pc-load': {
    keyword: 'Call of Duty Cheat FPS & Performance',
    description:
      'Call of Duty cheat FPS: baseline, ESP load, capture apps. Choose software cheats or DMA, then buy the matching card.',
  },
  'call-of-duty-cheat-vocabulary': {
    keyword: 'Call of Duty Cheat Glossary',
    description:
      'Call of Duty cheat glossary: ESP, aimbot, wallhack, HWID spoofer, Cloud DMA. Shop all four products on cod-cheats.org.',
  },
};

export function getArticleSeo(
  slug: string,
  fallback: { title: string; desc: string },
): { title: string; description: string } {
  const entry = ARTICLE_SEO[slug];
  if (!entry) {
    return { title: fallback.title, description: fallback.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
