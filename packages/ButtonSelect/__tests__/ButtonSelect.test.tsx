import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '@blaze-react/button';
import ButtonSelect from '../src';
import React from 'react';

const component = (
  <ButtonSelect text="Actions">
    <Button>Settings</Button>
    <Button>Sign out</Button>
  </ButtonSelect>
);

describe('ButtonSelect component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle', () => {
    const { asFragment } = render(component);
    fireEvent.click(screen.getByTestId('button-select-toggle'));
    expect(asFragment()).toMatchSnapshot();
  });
});
