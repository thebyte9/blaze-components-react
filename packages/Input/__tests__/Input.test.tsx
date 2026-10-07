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
  test('gives each instance its own id so labels point at their own field', () => {
    // The regression this guards: with no id or name, every Input used to render
    // id="input-text", so `htmlFor` on all of them resolved to the first input.
    // Browsers then see several fields claiming to be the same one, which breaks
    // label association and stops autofill matching saved values to fields.
    const { container } = render(
      <form>
        <Input {...defaultProps({ label: 'First name' })} />
        <Input {...defaultProps({ label: 'Last name' })} />
      </form>,
    );

    const inputs = Array.from(container.querySelectorAll('input'));
    const labels = Array.from(container.querySelectorAll('label'));
    expect(inputs).toHaveLength(2);

    const ids = inputs.map(input => input.id);
    expect(new Set(ids).size).toBe(ids.length);

    // Each label must resolve to the input it sits with, not to the first one.
    labels.forEach((label, index) => {
      expect(label.getAttribute('for')).toBe(inputs[index].id);
    });
  });

  test('keeps a caller-supplied id or name in the id', () => {
    const { container: byId } = render(<Input {...defaultProps({ id: 'given-id' })} />);
    expect(byId.querySelector('input')?.id).toBe('given-id');

    const { container: byName } = render(<Input {...defaultProps({ name: 'firstname' })} />);
    expect(byName.querySelector('input')?.id).toBe('input-firstname');
  });

  test('should be defined and renders correctly (snapshot)', () => {
    // Explicit id: the generated fallback uses useId, whose value depends on
    // render order, so a snapshot of it would break whenever a test is added
    // above this one.
    const { asFragment } = render(<Input {...defaultProps({ id: 'snapshot-input' })} />);
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
