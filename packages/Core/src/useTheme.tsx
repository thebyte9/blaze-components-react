import { useContext } from "react";
import { ThemeContext } from './ThemeContext'

interface IThemeStructure {
  button: string;
}

interface IThemeContext {
  dark:  IThemeStructure;
  default:  IThemeStructure;
  light:  IThemeStructure;
  selectedTheme:string;
}

const useTheme = (componentName: string):string => {
   const themeOptions = useContext<IThemeContext>(ThemeContext);
   const {selectedTheme} = themeOptions;
   const componentThemeClasses = themeOptions[selectedTheme][componentName];

  return componentThemeClasses;
}

export default useTheme;
