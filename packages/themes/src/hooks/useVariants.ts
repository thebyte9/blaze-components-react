import { variants } from '../variants';

export function useVariants(component: string): unknown {
  const variant = variants[component];

  return variant ?? '';
}
