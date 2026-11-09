/**
 * Central titles/descriptions for high-traffic routes.
 * Titles target ≤60 characters; descriptions ≤155 where practical.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Call of Duty ESP, Aimbot & wallhack Features',
    description:
      'Overview of Call of Duty ESP, aimbot, and wallhack-style tools plus HWID spoofer, skin changer, and Cloud DMA — four products on cod-cheats.org.',
  },
  '/products/': {
    title: 'Buy Call of Duty Cheats 2026 | Cheats, Spoofer & DMA',
    description:
      'Buy Call of Duty cheats: Call of Duty cheats bundle, HWID spoofer, skin changer, and Cloud DMA — compare four cards, then checkout on the partner site.',
  },
  '/articles/': {
    title: 'Call of Duty Cheat Articles 2026 | Aimbot, ESP & DMA',
    description:
      'Call of Duty cheat guides: aimbot settings, ESP setup, wallhack, HWID spoofer, skin changer, and DMA — then buy from the matching product card.',
  },
  '/forums/': {
    title: 'Call of Duty Cheats Forum 2026 | Aimbot & ESP Q&A Threads',
    description:
      'Call of Duty cheats forum: Call of Duty aimbot FOV, ESP clutter, wallhack lines, HWID spoofer, skin changer, and Cloud DMA threads on cod-cheats.org.',
  },
  '/faq/': {
    title: 'Risk & Call of Duty Cheats FAQ 2026 | Aimbot, ESP & Accounts',
    description:
      'Call of Duty cheats FAQ: ESP vs aimbot terms, affiliate checkout, HWID spoofer scope, skin changer vs combat tools, and account-risk basics.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | cod-cheats.org Commissions Policy',
    description:
      'Affiliate disclosure: cod-cheats.org may earn commissions from qualifying purchases through sponsored Buy links; third-party checkout handles orders.',
  },
  '/terms/': {
    title: 'Terms & Conditions | cod-cheats.org',
    description: 'Site terms, affiliate outbound links, and risk disclaimer for readers of cod-cheats.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | cod-cheats.org Data & Cookies',
    description:
      'Privacy: how cod-cheats.org handles analytics, cookies, support messages, and what we retain when you browse Call of Duty product pages.',
  },
  '/about/': {
    title: 'Warfare 4 Catalog | Modern 4 Cheats Hub 2026',
    description:
      'Warfare 4 Catalog: About cod-cheats.org — independent Call of Duty cheats, HWID spoofer, skin changer, Cloud DMA, plus guides and forums.',
  },
  '/support/': {
    title: 'Call of Duty Cheats Support | Site Help & Checkout',
    description:
      'Support for cod-cheats.org readers: four Call of Duty products, cheat guides, forums, and FAQ. Purchases complete on the partner checkout.',
  },
  '/blog/': {
    title: 'Call of Duty Cheat Guides | Blog Archive on cod-cheats.org',
    description:
      'Legacy blog URL for cod-cheats.org. All Call of Duty cheat guides, aimbot, ESP, and DMA articles are on the articles hub.',
  },
  '/forum/': {
    title: 'Call of Duty Cheats Forum Shortcut | Community Q&A',
    description:
      'Shortcut to the cod-cheats.org forums — Call of Duty aimbot, ESP, wallhack, spoofer, skin changer, and Cloud DMA threads.',
  },
  '/contact/': {
    title: 'Contact cod-cheats.org | Site Support Routing',
    description:
      'Contact routing for cod-cheats.org. Website help only — billing and keys are handled on the partner checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
