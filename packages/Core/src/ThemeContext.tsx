import React from 'react';


const ThemeContext = React.createContext({ 
  dark:{
  },
  default:{
    button:''
  },
  light:{
  },
  selectedTheme: 'default',
});
const { Provider: ThemeContextProvider, Consumer: ThemeContextConsumer } = ThemeContext;

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer };




