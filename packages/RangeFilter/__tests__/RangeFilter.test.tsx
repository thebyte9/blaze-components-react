import '@testing-library/jest-dom';

import RangeFilter from '../src/RangeFilter';
import React from 'react';
import { render } from '@testing-library/react';

declare global {
  interface Window {
    Document: any;
  }
}

const initialValue = {
  max: 20,
  min: 0,
  step: 1,
  minValue: 5,
  maxValue: 10,
};
const defaultProps = (override: object = {}) => ({
  error: true,
  name: '_test_',
  id: '_test_',
  onChange: () => void 0,
  value: initialValue,
  ...override,
});

describe('RangeFilter component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<RangeFilter {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test('should display validation message', () => {
  //   let override = {
  //     error: true,
  //     modifier: 'full-width',
  //     placeholder: 'Select a range',
  //     required: true,
  //   };

  //   const { getByTestId, rerender } = render(<RangeFilter {...defaultProps(override)} />);

  //   expect(getByTestId('validation-message')).toHaveTextContent('This field is required');

  //   const validationMessage = 'Range field is required';

  //   override = {
  //     ...override,
  //     ...{ validationMessage },
  //   };

  //   rerender(<RangeFilter {...defaultProps(override)} />);

  //   expect(getByTestId('validation-message')).toHaveTextContent(validationMessage);
  // });
});
