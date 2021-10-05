import { createContext, useContext } from 'react';
import { ThemeType } from '../types';
import { preset } from '../theme/preset';
import { applyTheme } from '../utils/index';
import { useVariant } from '../hooks/useVariant';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  showSkeleton: boolean;
};

interface IUseThemeProps {
  component: string;
  element?: string;
  variant?: string;
  theme?: ThemeType;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: preset,
  showSkeleton: false,
  setTheme: (theme: ThemeType) => {
    if (!theme) {
      console.warn('Theme not provided');
      return;
    }

    applyTheme(theme);
  },
});

export const useTheme = ({ component, element = 'container', variant = 'default', theme }: IUseThemeProps): any => {
  const { theme: themeFromContext, showSkeleton = false } = useContext(ThemeContext);

  const currentTheme = theme ?? themeFromContext;

  const componentVariant = useVariant({
    theme: currentTheme,
    component: component,
    variant: variant,
    element: element,
  });

  const variants = currentTheme[component].variants ?? '';

  return { variant: componentVariant, variants: variants, showSkeleton };
};
