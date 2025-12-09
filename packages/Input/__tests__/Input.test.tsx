import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import Input from '../src/deprecated/Input';
import React from 'react';

const defaultProps = (override: object = {}) => ({
  error: true,
  onChange: () => void 0,
  placeholder: 'Placeholder text',
  ...override,
});

describe('Input component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Input {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('visibility should be off', () => {
    const override = {
      type: 'password',
    };

    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    expect(getByTestId('toggle-input-type')).toHaveClass('active');
    expect(getByTestId('toggle-input-type')).toHaveTextContent('visibility_off');
  });

  test('should renders input with label', () => {
    const label = 'Text input label';
    const value = 'lorem ipsum';

    const override = {
      name: "email",
      label,
      value,
    };

    const { getByLabelText } = render(<Input {...defaultProps(override)} />);

    const input = getByLabelText(label);

    expect(input).toHaveValue(value);
  });

  test('should show or hide password on toggle', () => {
    const override = {
      type: 'password',
    };

    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    fireEvent.click(getByTestId('toggle-input-type'));

    expect(getByTestId('toggle-input-type')).toHaveClass('hide');
    expect(getByTestId('toggle-input-type')).toHaveTextContent('visibility');

    fireEvent.click(getByTestId('toggle-input-type'));

    expect(getByTestId('toggle-input-type')).toHaveClass('active');
    expect(getByTestId('toggle-input-type')).toHaveTextContent('visibility_off');
  });

  test('should display validation message', () => {
    let override = {
      error: true,
      modifier: 'full-width',
      placeholder: 'Enter email',
      required: true,
    };

    const { getByTestId, rerender } = render(<Input {...defaultProps(override)} />);

    expect(getByTestId('validation-message')).toHaveTextContent('This field is required');

    const validationMessage = 'Email address is required';

    override = {
      ...override,
      ...{ validationMessage },
    };

    rerender(<Input {...defaultProps(override)} />);

    expect(getByTestId('validation-message')).toHaveTextContent(validationMessage);
  });

  test('should change input', () => {
    interface IOnChangeArgs {
      value: string;
      event: React.ChangeEvent<HTMLInputElement>;
    }

    let stateValue = '';

    const onChange = (args: IOnChangeArgs): void => {
      const { value } = args;
      stateValue = value;
    };

    const override = {
      onChange,
    };

    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    const inputValue = 'lorem ipsum';

    fireEvent.change(getByTestId('input'), {
      target: {
        value: inputValue,
      },
    });

    expect(getByTestId('input')).toHaveValue(inputValue);
    expect(stateValue).toEqual(inputValue);
  });
});
