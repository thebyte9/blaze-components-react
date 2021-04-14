import { useContext } from "react";
import { ThemeContext } from './ThemeContext'

interface IThemeStructure {
  [index: string] : string;
  button: string;
}

interface IThemeContext {
  themes: {
    [index: string]: IThemeStructure;
    dark:  IThemeStructure;
    default:  IThemeStructure;
    light: IThemeStructure;
  },
  selectedTheme: string;
}

const useTheme = (componentName: string): string => {
  const themeOptions = useContext<IThemeContext>(ThemeContext);
  const { selectedTheme, themes } = themeOptions;
  const currentTheme = themes[selectedTheme];

  return currentTheme[componentName];
}

export default useTheme;
