import { ITheme } from './types';

export function applyTheme(theme: unknown): void {
  const root = document.documentElement;

  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  textBaseColor,
  textPrimaryColor,
  textMutedColor,
  textInvertedColor,
  textOutlinedColor,
  textOutlinedDisabledColor,

  buttonPrimaryColor,
  buttonPrimaryHoverColor,
  buttonDisabledColor,
  buttonPressedColor,
  buttonOutlinedColor,
  buttonOutlinedHoverColor,
  buttonBorderRadius,
  buttonBorderRadiusLarge,
  buttonBorderOutlinedColor,
  buttonBorderOutlinedDisabledColor,

  tabTextBaseColor,
  tabTextInvertedColor,
  tabPrimaryColor,
  tabHoverColor,
  tabBorderRadius,
}: ITheme): any {
  return {
    '--color-text-base': textBaseColor,
    '--color-text-primary': textPrimaryColor,
    '--color-text-muted': textMutedColor,
    '--color-text-inverted': textInvertedColor,
    '--color-text-outlined': textOutlinedColor,
    '--color-text-outlined-disabled': textOutlinedDisabledColor,
    '--color-button-primary': buttonPrimaryColor,
    '--color-button-primary-hover': buttonPrimaryHoverColor,
    '--color-button-disabled': buttonDisabledColor,
    '--color-button-pressed': buttonPressedColor,
    '--color-button-outlined': buttonOutlinedColor,
    '--color-button-outlined-hover': buttonOutlinedHoverColor,
    '--border-radius-button': buttonBorderRadius,
    '--border-radius-button-large': buttonBorderRadiusLarge,
    '--border-button-outlined': buttonBorderOutlinedColor,
    '--border-button-disabled': buttonBorderOutlinedDisabledColor,
    '--tab-color-text-base': tabTextBaseColor,
    '--tab-color-text-inverted': tabTextInvertedColor,
    '--tab-color-button-primary': tabPrimaryColor,
    '--tab-color-button-primary-hover': tabHoverColor,
    '--tab-border-radius': tabBorderRadius,
  };
}
