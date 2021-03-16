interface IThemeStructure {
button: string;
}

interface IThemeContext {
dark:  object;
default:  IThemeStructure;
light:  object;
selectedTheme: string;
}

export { IThemeStructure, IThemeContext }
