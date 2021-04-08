import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Checkboxes } from '../src';
import React from 'react';
import userEvent from '@testing-library/user-event';

const options = [
  {
    id: 1,
    label: 'first',
    value: 'lorem ipsum',
  },
  {
    id: 2,
    label: 'I accept',
    required: true,
    value: 'accepted',
  },
  {
    id: 3,
    disabled: true,
    label: 'Disabled',
    value: '',
  },
  {
    id: 4,
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
    expect(asFragment).toMatchSnapshot();
  });

  it('should render and toggle single checkbox', () => {
    const override = {
      options: single,
      returnBoolean: true,
    };

    render(<Checkboxes {...defaultProps(override)} />);

    // expect(wrapper.find('input').length).toBe(1);

    // expect(wrapper.find('input').at(0).prop('checked')).toBe(false);

    // wrapper.find('input').at(0).simulate('click');

    // expect(wrapper.find('input').at(0).prop('checked')).toBe(true);
  });

  it('should render multiple checkboxes and toggle', () => {
    let selectedBoxLabel = '';

    type TValue = object | any;

    const onChange = ({ value: [{ label }] }: TValue) => {
      selectedBoxLabel = label;
    };

    let override = {
      onChange,
    };

    const { rerender } = render(<Checkboxes {...defaultProps(override)} />);
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
