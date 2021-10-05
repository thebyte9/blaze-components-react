import { ThemeType } from '../types';
import React, { useState } from 'react';
import { ThemeContext } from './themeContext';

interface ThemeProviderProps {
  theme: ThemeType;
  showSkeleton: boolean;
  children: unknown;
}

export function ThemeProvider({ theme, showSkeleton, children }: ThemeProviderProps): JSX.Element {
  const [currentTheme, setTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setTheme, showSkeleton: showSkeleton }}>
      {children}
    </ThemeContext.Provider>
  );
}
