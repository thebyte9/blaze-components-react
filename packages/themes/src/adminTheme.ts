import { ITheme } from './types';
import { createTheme } from './utils';

export const adminTheme: ITheme = createTheme({
  textPrimaryColor: '255, 255, 255',
  textMutedColor: '199, 210, 254',
  textInvertedColor: '79, 70, 229',
  buttonPrimaryColor: '255, 173, 1',
  buttonPrimaryHoverColor: '147, 183, 243',
  buttonDisabledColor: '190, 190, 190',
  buttonPressedColor: '137, 155, 188',
  buttonBorderRadius: '17px',
  buttonBorderRadiusLarge: '21px',
});
