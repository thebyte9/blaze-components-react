import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import RadioButton from '../src/RadioButton';
import React from 'react';
import userEvent from '@testing-library/user-event';

const options = [
  {
    label: 'Example',
    value: 1,
    id: 'one',
  },
  {
    label: 'I accept',
    value: 'accepted',
    required: true,
    id: 'two',
  },
  {
    label: 'Disabled',
    value: '',
    disabled: true,
    id: 'three',
  },
];

describe('RadioButton component', () => {
  test('should be defined xand renders correctly (snapshot)', () => {
    const { asFragment } = render(<RadioButton onChange={() => ({})} required options={options} />);
    expect(asFragment).toMatchSnapshot();
  });

  test('should active RadioButton on click', () => {
    render(<RadioButton onChange={() => ({})} options={options} />);
    userEvent.click(screen.getByLabelText(/I accept/i));
  });

  test("can't interact when RadioButton is disabled", () => {
    render(<RadioButton onChange={() => ({})} options={options} />);
    userEvent.click(screen.getByLabelText(/Disabled/i));
  });
});
