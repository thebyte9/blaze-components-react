import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import Select from '../src/Select';

const defaultProps = (override: object = {}) => ({
  onChange: () => void 0,
  showDefaultOption: false,
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

  test('should have Please choose as a default option', () => {
    render(<Select {...defaultProps({ showDefaultOption: true })} />);
    expect(screen.getByText('Please Choose...')).toBeInTheDocument();
  });
});

test('should not have aria-label if label is set', () => {
  render(<Select {...defaultProps({ label: 'Select Label' })} />);
  const selectElement = screen.getByLabelText('Select Label');
  expect(selectElement).toBeInTheDocument();
  expect(selectElement).not.toHaveAttribute('aria-label');
});

test('should have custom default text as aria-label when no label is provided', () => {
  const customDefaultText = 'Choose an option';
  render(<Select {...defaultProps({ label: undefined, defaultTextValue: customDefaultText })} />);
  const selectElement = screen.getByLabelText(customDefaultText);
  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toHaveAttribute('aria-label', customDefaultText);
});
