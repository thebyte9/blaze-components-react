import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import SocialFollow from '../src/SocialFollow';

const media = {
  facebook: 'https://www.thebyte9.com',
  twitter: 'https://www.thebyte9.com',
  pinterest: 'https://www.thebyte9.com',
  linkedIn: 'https://www.thebyte9.com',
  youtube: 'https://www.thebyte9.com',
  instagram: 'https://www.thebyte9.com',
};

describe('SocialFollow component', () => {
  it('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<SocialFollow media={media} type="follow" title="Follow" vertical />);
    expect(asFragment).toMatchSnapshot();
  });

  it('SocialFollow should be share by default', () => {
    const { asFragment } = render(<SocialFollow media={media} />);
    expect(asFragment).toMatchSnapshot();
  });
});
