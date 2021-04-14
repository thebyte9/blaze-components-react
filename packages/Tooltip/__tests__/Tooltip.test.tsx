import React from 'react';
import Tooltip from '../src/Tooltip';
import { render } from '@testing-library/react';

describe('Tooltip component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Tooltip text="Byte9" />);
    expect(asFragment).toMatchSnapshot();
  });
});
