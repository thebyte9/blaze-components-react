export enum Theme {
  Light = 'light',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
