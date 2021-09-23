import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Button from '../src';
import React from 'react';

const testProps = {
  modifiers: ['outline', 'rounded'],
};

describe('Button component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Button {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be type button by default', () => {
    render(<Button type="button" {...testProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should be type submit when passing isSubmit prop', () => {
    render(<Button type="submit" {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
