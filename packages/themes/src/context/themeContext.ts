import { createContext, useContext } from 'react';
import { ITheme } from '../types';
import { adminTheme } from '../themes/adminTheme';

export enum Themes {
  Admin = 'Admin',
  Frontend = 'Frontend',
}

type ThemeContextType = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: adminTheme,
  setTheme: () => console.warn('Theme provider not found'),
});

export const useTheme = (): any => useContext(ThemeContext);
