import { ITheme } from './types';
import { createTheme } from './utils';

export const adminTheme: ITheme = createTheme({
  textBaseColor: '66, 63, 63',
  textPrimaryColor: '255, 255, 255',
  textMutedColor: '199, 210, 254',
  textInvertedColor: '137, 155, 188',
  textOutlinedColor: '66, 133, 244',
  textOutlinedDisabledColor: '190, 190, 190',
  buttonPrimaryColor: '255, 173, 1',
  buttonPrimaryHoverColor: '147, 183, 243',
  buttonDisabledColor: '190, 190, 190',
  buttonPressedColor: '137, 155, 188',
  buttonOutlinedColor: '255, 255, 255',
  buttonOutlinedHoverColor: '66, 133, 244',
  buttonBorderRadius: '17px',
  buttonBorderRadiusLarge: '21px',
  buttonBorderOutlinedColor: '66, 133, 244',
  buttonBorderOutlinedDisabledColor: '66, 133, 244',
});
