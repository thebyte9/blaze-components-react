import { ITheme } from './types';

export function applyTheme(theme: unknown): void {
  const root = document.documentElement;

  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  textPrimaryColor,
  textMutedColor,
  textInvertedColor,
  buttonPrimaryColor,
  buttonPrimaryHoverColor,
  buttonDisabledColor,
  buttonPressedColor,
  buttonBorderRadius,
  buttonBorderRadiusLarge,
}: ITheme): any {
  return {
    '--color-text-primary': textPrimaryColor,
    '--color-text-muted': textMutedColor,
    '--color-text-inverted': textInvertedColor,
    '--color-button-primary': buttonPrimaryColor,
    '--color-button-primary-hover': buttonPrimaryHoverColor,
    '--color-button-disabled': buttonDisabledColor,
    '--color-button-pressed': buttonPressedColor,
    '--border-radius-button': buttonBorderRadius,
    '--border-radius-button-large': buttonBorderRadiusLarge,
  };
}