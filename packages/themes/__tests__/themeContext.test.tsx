import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from '../src/context/themeContext';
import { ThemeProvider } from '../src/context/themeProvider';
import { preset } from '@blaze-react/themes';
import { Button } from '@blaze-react/button';

describe('Theme Context', () => {
  test('it should render correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={preset} showSkeleton>
        <Button />
      </ThemeProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('it should console.warn if theme is undefined', () => {
    const setTheme = jest.fn();

    const { asFragment } = render(
      <ThemeContext.Provider
        value={{ theme: preset, setTheme: setTheme, showSkeleton: false }}
      ></ThemeContext.Provider>,
    );

    expect(asFragment).toMatchSnapshot();
  });
});
