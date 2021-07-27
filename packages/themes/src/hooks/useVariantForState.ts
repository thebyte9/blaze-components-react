import { ThemeType } from '../types';

export function useVariantForState(
  theme: ThemeType,
  component: string,
  state: string,
  variantName: string,
  children: string,
): unknown {
  const defaultVariant = theme[component].states[state].primary[children];

  if (!variantName) return defaultVariant;

  return theme[component]?.states[state][variantName][children] ?? '';
}
