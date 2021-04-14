import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Avatar from '../src/Avatar';
import React from 'react';

declare let window: any;

const dummyImage = {
  addEventListener: jest.fn((_, evtHandler) => {
    evtHandler();
  }),
};

window.Image = jest.fn(() => dummyImage);

const url = 'http://lorempixel.com/400/400/people/';

const defaultProps = (override: Record<string, unknown> = {}) => ({
  url,
  ...override,
});

const AvatarComponent = <Avatar {...defaultProps()} />;

describe('Avatar component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(AvatarComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should load image', () => {
    render(<Avatar {...defaultProps()} />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', url);
  });

  it('The text of the avatar must be the initials of the username', () => {
    const override = {
      url: '',
      username: 'Blaze 2',
    };

    render(<Avatar {...defaultProps(override)} />);
    expect(screen.getByText('B2')).not.toBe(null);
  });
});
