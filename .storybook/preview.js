import './styles.css';
import { adminTheme, ThemeContext, applyTheme } from '@blaze-react/themes';
import React, { useState } from 'react';

export const decorators = [
  (Story) => {
    const [theme, setTheme] = useState(adminTheme);

    applyTheme(theme);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Story />
      </ThemeContext.Provider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
