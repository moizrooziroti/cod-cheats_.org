/** Partner checkout destinations (affiliate codes live here only — not in page HTML). */
export const CHECKOUT_URLS = {
  cheats: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fmw4',
  hwidSpoofer: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fskin-changer',
  cloudDma: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fcloud-dma',
};

/** Checkout paths → external product URLs (used by Node serve + Cloudflare _redirects). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/cheats', CHECKOUT_URLS.cheats],
  ['/go/cheats/', CHECKOUT_URLS.cheats],
  ['/go/call-of-duty-cheats', CHECKOUT_URLS.cheats],
  ['/go/call-of-duty-cheats/', CHECKOUT_URLS.cheats],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`);
  }
  return undefined;
}
