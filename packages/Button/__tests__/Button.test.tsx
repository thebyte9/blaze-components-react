import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Button from '../src/Button';
import React from 'react';

const testProps = {
  modifiers: ['outline', 'rounded'],
};

const ButtonComponent = <Button {...testProps} />;

describe('Button component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(ButtonComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be type button by default', () => {
    render(ButtonComponent);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should be type submit when passing isSubmit prop', () => {
    render(<Button type="submit" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
