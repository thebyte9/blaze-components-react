import { ThemeType } from '../types';

export function useVariant(theme: ThemeType, component: string, variantName: string, children: string): unknown {
  const defaultVariant = theme[component].variants.primary[children];

  if (!variantName) return defaultVariant;

  return theme[component].variants[variantName][children] ?? '';
}
