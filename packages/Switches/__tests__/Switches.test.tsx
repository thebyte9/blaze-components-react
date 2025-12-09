import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Switches from '../src/Switches';
import userEvent from '@testing-library/user-event';

const options = [
  { id: 1, label: 'Switch text' },
  { id: 2, label: 'Switch text' },
  { disabled: true, label: 'Disabled' },
];

const single = {
  label: 'Switch text',
  required: true,
};

const defaultProps = (override = {}) => ({
  onChange: jest.fn(),
  options,
  ...override,
});

describe('Switches component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Switches {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should toggle Switch on click', () => {
    const override = {
      error: true,
      modifier: Switches.availableModifiers.secondary,
      options: single,
      returnBoolean: true,
    };

    render(<Switches {...defaultProps(override)} />);
    const cb = screen.getByRole('checkbox');
    userEvent.click(cb);
  });

  test("can't interact when Switch is disabled", () => {
    render(<Switches {...defaultProps()} />);
    userEvent.click(screen.getByText(/Disabled/i));
  });
});

describe('Switches vertical orientation', () => {
  test('applies vertical class and matches snapshot', () => {
    const { container, asFragment } = render(
      <Switches
        onChange={jest.fn()}
        options={single}
        alignVertically
      />
    );

    const root = container.querySelector('.switch');
    expect(root).toHaveClass('switch--vertical');
    expect(asFragment()).toMatchSnapshot();
  });

  test('vertical respects labelPosition class (left)', () => {
    const { container } = render(
      <Switches
        onChange={jest.fn()}
        options={{ id: 'v3', label: 'Left label' }}
        alignVertically
        labelPosition="left"
      />
    );

    const root = container.querySelector('.switch');
    expect(root).toHaveClass('switch--vertical');
    expect(root).toHaveClass('switch--label--left');
  });
});
