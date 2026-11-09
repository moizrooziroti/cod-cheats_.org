import type { ProductPage } from '../data/products';

export interface ProductSeoEntry {
  keyword: string;
  description: string;
}

export const PRODUCT_SEO: Record<string, ProductSeoEntry> = {
  'call-of-duty-cheats': {
    keyword: 'CALL OF DUTY CHEATS',
    description:
      'Call of Duty cheats for PC with ESP, aimbot-style assist, and wallhack overlays. See modules and price on checkout — buy from this card.',
  },
  'call-of-duty-spoofer': {
    keyword: 'Call of Duty HWID Spoofer Download',
    description:
      'Call of Duty HWID spoofer for Call of Duty hardware-ID tooling — scope on the listing, not ESP. Open the spoofer product and checkout when that is the buy.',
  },
  'call-of-duty-skin-changer': {
    keyword: 'Call of Duty Skin Changer Buy',
    description:
      'Call of Duty skin changer for Call of Duty camos, blueprints, and operator cosmetics — cosmetic-only, separate from combat cheats. Buy via the skin changer card.',
  },
  'cloud-dma': {
    keyword: 'Call of Duty Cloud DMA Buy',
    description:
      'Cloud DMA for Call of Duty — external memory path, hardware notes on checkout. Compare versus software Call of Duty cheats before you pay.',
  },
};

export function getProductSeo(product: ProductPage): { title: string; description: string } {
  const entry = PRODUCT_SEO[product.slug];
  if (!entry) {
    return { title: product.title, description: product.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
