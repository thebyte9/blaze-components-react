import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import Select from '../src/Select';

const defaultProps = (override: object = {}) => ({
  onChange: () => void 0,
  options: ['lorem', 'ipsum'],
  ...override,
});

describe('Select component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Select {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be disabled when none options', () => {
    const override = {
      label: 'Select label',
      options: [],
      required: true,
    };
    const { asFragment } = render(<Select {...defaultProps(override)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should select a different value', () => {
    render(<Select {...defaultProps()} />);
    fireEvent.change(screen.getByText('Please Choose...'), { target: { value: 'ipsum' } });
  });
});
