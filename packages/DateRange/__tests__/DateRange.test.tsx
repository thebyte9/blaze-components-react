import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import DateRange from '../src/DateRange';
import React from 'react';

const FIRST_DAY_OF_SECONND_ROW = 7;
const LAST_DAY_OF_SECONND_ROW = 13;
const LAST_30_DAYS = 30;

const defaultProps = (override: object = {}) => ({
  onChange: () => void 0,
  custom: true,
  ...override,
});

describe('DateRange component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<DateRange {...defaultProps({ selected: LAST_30_DAYS })} />);
    expect(asFragment()).toBeDefined();
  });

  test('should select a value', () => {
    render(<DateRange {...defaultProps()} />);
    fireEvent.change(screen.getByText('Please Choose...'), { target: { value: 'days, 30' } });
  });

  test('should select a value', () => {
    render(<DateRange {...defaultProps()} />);
    fireEvent.change(screen.getByText('Please Choose...'), { target: { value: 'days, 30' } });
  });
});
