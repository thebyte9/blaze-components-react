export interface ITheme {
  textBaseColor: string;
  textPrimaryColor: string;
  textMutedColor: string;
  textInvertedColor: string;
  textOutlinedColor: string;
  textOutlinedDisabledColor: string;

  buttonPrimaryColor: string;
  buttonPrimaryHoverColor: string;
  buttonDisabledColor: string;
  buttonPressedColor: string;
  buttonOutlinedColor: string;
  buttonOutlinedHoverColor: string;
  buttonBorderRadius: string;
  buttonBorderRadiusLarge: string;
  buttonBorderOutlinedColor: string;
  buttonBorderOutlinedDisabledColor: string;

  tabTextBaseColor: string;
  tabTextInvertedColor: string;
  tabPrimaryColor: string;
  tabHoverColor: string;
  tabBorderRadius: string;
}

export type ThemeType = {
  [index: string]: any;
};
