import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Dropdown from '../src/Dropdown';
import React from 'react';

const component = (
  <Dropdown label="Dropdown">
    <a href="/">Settings</a>
    <a href="/">Sign out</a>
  </Dropdown>
);

describe('Dropdown component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(component);

    expect(asFragment).toMatchSnapshot();
  });
});
