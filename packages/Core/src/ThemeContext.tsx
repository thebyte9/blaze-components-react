import React from 'react';


const ThemeContext = React.createContext({ 
  default:{
    group:''
  },
  selectedTheme: 'default',
});
const { Provider: ThemeContextProvider, Consumer: ThemeContextConsumer } = ThemeContext;

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer };




