import { ITheme } from './types';
import { createTheme } from './utils';

export const frontendTheme: ITheme = createTheme({
  textPrimaryColor: '255, 255, 255',
  textMutedColor: '199, 210, 254',
  textInvertedColor: '79, 70, 229',
  buttonPrimaryColor: '67, 56, 202',
  buttonPrimaryHoverColor: '147, 183, 243',
  buttonDisabledColor: '190, 190, 190',
  buttonPressedColor: '137, 155, 188',
  buttonBorderRadius: '5px',
  buttonBorderRadiusLarge: '10px',
});
