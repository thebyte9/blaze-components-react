import { createContext, useContext } from 'react';
import { ThemeType } from '../types';
import { preset } from '../theme/preset';
import { applyTheme } from '../utils';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: preset,
  setTheme: (theme: ThemeType) => {
    if (!theme) {
      console.warn('Theme not provided');
      return;
    }

    applyTheme(theme);
  },
});

export const useTheme = (): any => useContext(ThemeContext);
