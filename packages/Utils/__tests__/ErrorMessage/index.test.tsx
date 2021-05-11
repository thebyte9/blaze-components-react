import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import ErrorMessage from '../../src/ErrorMessage';
import React from 'react';

describe('ErrorMessage function', () => {
  const defaultProps = {
    icon: 'testIcon',
    message: 'testMessage',
  };

  it('should match snapshot', () => {
    const { asFragment } = render(<ErrorMessage message={<p>Text</p>} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
