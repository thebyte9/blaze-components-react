import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ButtonView } from '../src/view/ButtonView';
import React from 'react';

const testProps = {
  modifiers: ['outline', 'rounded'],
};

describe('Button component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<ButtonView {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be type button by default', () => {
    render(<ButtonView type="button" {...testProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should be type submit when passing isSubmit prop', () => {
    render(<ButtonView type="submit" {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
