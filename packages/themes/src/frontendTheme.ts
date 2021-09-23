import { ITheme } from './types';
import { createTheme } from './utils';

export const frontendTheme: ITheme = createTheme({
  textBaseColor: '66, 63, 63',
  textPrimaryColor: '255, 255, 255',
  textMutedColor: '199, 210, 254',
  textInvertedColor: '137, 155, 188',
  textOutlinedColor: '66, 133, 244',
  textOutlinedDisabledColor: '190, 190, 190',

  buttonPrimaryColor: '59, 130, 246',
  buttonPrimaryHoverColor: '29, 78, 216',
  buttonDisabledColor: '190, 190, 190',
  buttonPressedColor: '96, 165, 250',
  buttonOutlinedColor: '255, 255, 255',
  buttonOutlinedHoverColor: '66, 133, 244',
  buttonBorderRadius: '5px',
  buttonBorderRadiusLarge: '8px',
  buttonBorderOutlinedColor: '66, 133, 244',
  buttonBorderOutlinedDisabledColor: '66, 133, 244',

  tabTextBaseColor: '66, 63, 63',
  tabTextInvertedColor: '255, 255, 255',
  tabPrimaryColor: '215, 224, 240',
  tabHoverColor: '66, 133, 244',
  tabBorderRadius: '8px',
});
