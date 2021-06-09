import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import DateRange from '../src/DateRange';
import React from 'react';

const CUSTOM = 'custom';
const LAST_SEVEN_DAYS = 7;

describe('DateRange component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<DateRange selected={CUSTOM} onChange={jest.fn()} custom />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be defined and renders correctly (snapshot)', () => {
    render(<DateRange selected={CUSTOM} onChange={jest.fn()} custom />);
    fireEvent.change(screen.getByTestId('From'), { target: { value: '01/01/2021' } });
    fireEvent.change(screen.getByTestId('To'), { target: { value: '31/12/2021' } });
  });

  test('should trigger handleOnChange', () => {
    const onChangeMock = jest.fn();
    render(<DateRange selected={LAST_SEVEN_DAYS} onChange={onChangeMock} />);
    fireEvent.change(screen.getByTestId('select-date-range'), { target: { value: 'days,7' } });
  });
});
