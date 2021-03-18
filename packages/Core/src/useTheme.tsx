import { useContext } from "react";
import { IThemeContext } from './interfaces'
import { ThemeContext } from './ThemeContext';


const useTheme = (componentName: string):string => {
   const themeOptions = useContext<IThemeContext>(ThemeContext);
   const { selectedTheme } = themeOptions;
   const componentThemeClasses = themeOptions[selectedTheme][componentName] || themeOptions.default[componentName];

  return componentThemeClasses;
}

export default useTheme;
