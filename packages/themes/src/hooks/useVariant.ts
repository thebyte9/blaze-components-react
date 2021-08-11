import { ThemeType } from '../types';

interface IUseVariantProps {
  theme: ThemeType;
  component: string;
  variant?: string;
  element: string;
}

export function useVariant({ theme, component, variant = 'default', element }: IUseVariantProps): any {
  return theme[component]?.variants[variant][element];
}
