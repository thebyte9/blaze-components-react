export enum Theme {
  Admin = 'Admin',
  Frontend = 'Frontend',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
