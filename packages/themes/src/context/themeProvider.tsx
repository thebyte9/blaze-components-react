import { ThemeType } from '../types';
import React from 'react';
import { ThemeContext } from './themeContext';

interface ThemeProviderProps {
  theme: ThemeType;
  showSkeleton: boolean;
  children: unknown;
  setTheme?: (theme: ThemeType) => void;
}

export function ThemeProvider({ theme, setTheme, showSkeleton, children }: ThemeProviderProps): JSX.Element {
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme, showSkeleton: showSkeleton }}>
      {children}
    </ThemeContext.Provider>
  );
}
