import React from 'react';
const ThemeContext = React.createContext({
  themes: {
    dark: {
      button: ''
    },
    default: {
      button: ''
    },
    light: {
      button: ''
    }
  },
  selectedTheme: 'default',
});
const { Provider: ThemeContextProvider, Consumer: ThemeContextConsumer } = ThemeContext;

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer };




