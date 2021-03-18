interface IThemeStructure {
  group: string;
}

interface IThemeContext {
  default:  IThemeStructure;
  selectedTheme: string;
}

export { IThemeStructure, IThemeContext }
