import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { ButtonView } from '@blaze-react/button';
import ButtonSelect from '../src';
import React from 'react';

const component = (
  <ButtonSelect text="Actions">
    <ButtonView>Settings</ButtonView>
    <ButtonView>Sign out</ButtonView>
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
