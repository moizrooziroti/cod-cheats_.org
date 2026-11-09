/** Unified catalog prices (partner checkout as of build — re-verify before launch). */
export const DISPLAY_PRICE_LABEL = '$35';

export type ProductPlanId = 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const catalogPlans: ProductPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly plan',
    priceUsd: 35,
    priceNote: 'Recurring access — exact renewal terms on affiliate checkout.',
  },
  {
    id: 'lifetime',
    label: 'Lifetime plan',
    priceUsd: 0,
    priceNote: 'One-time tier — open checkout to see the live lifetime price.',
  },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return catalogPlans;
}

export function formatPlanPrice(usd: number): string {
  if (usd > 0) return `$${usd}`;
  return 'See checkout';
}

export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}
