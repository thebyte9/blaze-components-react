import { createContext } from 'react';
import { Theme, ThemeContextType } from './types';

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Frontend,
  setTheme: (theme) => console.warn(`no theme provider found for ${theme}`),
});

export default ThemeContext;
