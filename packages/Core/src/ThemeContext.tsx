import React from 'react';


const ThemeContext = React.createContext({ 
  dark:{
    button:'rounded black'
  },
  default:{
    button:''
  },
  light:{
    button:'rounded white'
  },
  selectedTheme: 'light',
});
const { Provider: ThemeContextProvider, Consumer: ThemeContextConsumer } = ThemeContext;

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer };




