import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Checkboxes } from '../src';
import React from 'react';
import userEvent from '@testing-library/user-event';

const options = [
  {
    id: '1-checkbox',
    label: 'first',
    value: 'lorem ipsum',
  },
  {
    id: '2-checkbox',
    label: 'I accept',
    required: true,
    value: 'accepted',
  },
  {
    id: '3-checkbox',
    disabled: true,
    label: 'Disabled',
    value: 'disabled',
  },
  {
    id: '4-checkbox',
    label: 'display none',
    show: false,
  },
];

const single = {
  label: 'Single',
  value: 'lorem ipsum',
};

const defaultProps = (override = {}) => ({
  onChange: () => ({}),
  options,
  ...override,
});

describe('Checkboxes component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Checkboxes {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and toggle single checkbox', () => {
    const override = {
      options: single,
      returnBoolean: true,
    };

    render(<Checkboxes {...defaultProps(override)} />);

    const checkboxArray = screen.getAllByRole('checkbox');

    expect(checkboxArray.length).toBe(1);
  });

  it('should render a disabled checkbox', () => {
    const { asFragment } = render(<Checkboxes {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render multiple checkboxes and toggle', () => {
    let selectedBoxLabel = '';

    type TValue = object | any;

    const onChange = ({ value: [{ label }] }: TValue) => {
      selectedBoxLabel = label;
    };

    const override = {
      onChange,
    };

    render(<Checkboxes {...defaultProps(override)} />);
    fireEvent.click(screen.getByTestId('1-checkbox'));

    expect(selectedBoxLabel).toEqual('first');
  });

  it("can't interact when checkbox is disabled", () => {
    render(<Checkboxes {...defaultProps()} />);
    const checkbox = screen.getByTestId('1-checkbox');
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
