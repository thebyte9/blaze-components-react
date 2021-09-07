import withOpacity from './utils/withOpacity';
import { overrideClasses } from './utils/overrideClasses';
import { adminTheme } from './themes/adminTheme';
import { frontendTheme } from './themes/frontendTheme';
import { ThemeContext, useTheme } from './context/themeContext';
import { ThemeProvider } from './context/themeProvider';
import { applyTheme, createTheme } from './utils';
import { variants } from './variants';
import { preset } from './theme/preset';
import { useVariant } from './hooks/useVariant';
import { useComponentVariant } from './hooks/useComponentVariant';
import error from '../../../plugins/error';
import hideScrollbar from '../../../plugins/hideScrollbar';
import requiredField from '../../../plugins/required';
import success from '../../../plugins/success';
import warning from '../../../plugins/warning';
import { ThemeType } from './types';

export {
  withOpacity,
  error,
  hideScrollbar,
  requiredField,
  success,
  warning,
  adminTheme,
  frontendTheme,
  ThemeContext,
  useTheme,
  applyTheme,
  createTheme,
  variants,
  overrideClasses,
  preset,
  useVariant,
  useComponentVariant,
  ThemeProvider,
  ThemeType,
};
