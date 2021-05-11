import '@testing-library/jest-dom';

import { TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME } from '../src/constants';

import DateTimeInput from '../src/DateTimeInput';
import React from 'react';
import { render } from '@testing-library/react';

const defaultProps = (override: object = {}) => ({
  error: true,
  onChange: () => void 0,
  type: TYPE_DATE_TIME,
  ...override,
});

describe('DateTimeInput component', () => {
  test('should be defined and renders correctly type=dateTime (snapshot)', () => {
    const { asFragment } = render(<DateTimeInput {...defaultProps()} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should be defined and renders correctly type=date (snapshot)', () => {
    const { asFragment } = render(<DateTimeInput {...defaultProps({ type: TYPE_DATE })} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should be defined and renders correctly type=time (snapshot)', () => {
    const { asFragment } = render(<DateTimeInput {...defaultProps({ type: TYPE_TIME })} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should be defined and renders correctly type=undefined (snapshot)', () => {
    const { asFragment } = render(<DateTimeInput {...defaultProps({ type: undefined })} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
