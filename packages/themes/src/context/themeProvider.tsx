import { ThemeType } from '../types';
import React, { useState } from 'react';
import { ThemeContext } from './themeContext';

interface ThemeProviderProps {
  theme: ThemeType;
  children: unknown;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps): JSX.Element {
  const [currentTheme, setTheme] = useState(theme);

  return <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setTheme }}>{children}</ThemeContext.Provider>;
}
