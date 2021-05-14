import ToggleInputType from '../src/ToggleInputType';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

const defaultProps = {
  type: 'text',
  toggleType: jest.fn(),
};

describe('ToggleInputType', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<ToggleInputType {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
