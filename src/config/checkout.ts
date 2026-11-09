import { SITE_URL } from './site';

function goCheckout(path: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : '/' + path;
  const withSlash = p.endsWith('/') ? p : p + '/';
  return base + withSlash;
}

/**
 * Affiliate purchase destinations (four products only).
 * HTML links use same-origin /go/ paths; hosting redirects to the partner checkout.
 */
export const BUY_URLS = {
  cheats: goCheckout('/go/cheats'),
  spoofer: goCheckout('/go/hwid-spoofer'),
  skinChanger: goCheckout('/go/skin-changer'),
  cloudDma: goCheckout('/go/cloud-dma'),
} as const;

export type BuyProduct = keyof typeof BUY_URLS;

/** Default header CTA — main cheats offer */
export const PRIMARY_BUY_URL = BUY_URLS.cheats;

/** Map product slug → buy URL */
/** Article slug → matching affiliate checkout (four products only). */
export function buyUrlForArticleSlug(slug: string): string {
  if (slug.includes('hwid-spoofer') || slug.includes('spoofer')) return BUY_URLS.spoofer;
  if (slug.includes('skin-changer')) return BUY_URLS.skinChanger;
  if (slug.includes('cloud-dma') || slug === 'software-cheats-vs-cloud-dma-tradeoffs') {
    return BUY_URLS.cloudDma;
  }
  return BUY_URLS.cheats;
}

export function buyUrlForSlug(slug: string): string {
  switch (slug) {
    case 'call-of-duty-cheats':
      return BUY_URLS.cheats;
    case 'call-of-duty-spoofer':
      return BUY_URLS.spoofer;
    case 'call-of-duty-skin-changer':
      return BUY_URLS.skinChanger;
    case 'cloud-dma':
      return BUY_URLS.cloudDma;
    default:
      return PRIMARY_BUY_URL;
  }
}

/** Legacy blog CTA hrefs → current affiliate URLs (if any old paths remain in content). */
const LEGACY_ZADEYO = [
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fmw4',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhwid-spoofer',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fskin-changer',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fcloud-dma',
];

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : '/' + href;
  }
  for (const url of Object.values(BUY_URLS)) {
    if (href === url || href.startsWith(url + '&')) return url;
  }
  if (href.startsWith(LEGACY_ZADEYO[0])) return BUY_URLS.cheats;
  if (href.startsWith(LEGACY_ZADEYO[1])) return BUY_URLS.spoofer;
  if (href.startsWith(LEGACY_ZADEYO[2])) return BUY_URLS.skinChanger;
  if (href.startsWith(LEGACY_ZADEYO[3])) return BUY_URLS.cloudDma;
  return href;
}
