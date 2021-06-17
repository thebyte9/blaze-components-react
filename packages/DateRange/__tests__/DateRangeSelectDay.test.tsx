import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DateRangeSelectDay from '../src/DateRangeSelectDay';
import React from 'react';

describe('DateRange component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should select a value', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);
    const input = screen.getByTestId('custom');
    fireEvent.change(input, { target: { value: '11/12/2021' } });
  });

  test('should handle opening and closing the calendar', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);

    fireEvent.click(screen.getByTestId('custom'));
    expect(screen.getByTestId('calendar-container')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('custom'));
    expect(screen.getByTestId('calendar-container')).toBeInTheDocument();
  });

  test('should handle changing dates', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);

    fireEvent.change(screen.getByTestId('custom'), { target: { value: '12/11/2021' } });
    fireEvent.click(screen.getByTestId('custom'));
    fireEvent.mouseDown(screen.getByTestId('custom'));
  });

  test('should handle prev month', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);

    fireEvent.change(screen.getByTestId('custom'), { target: { value: '12/11/2021' } });
    fireEvent.click(screen.getByTestId('custom'));
    fireEvent.click(screen.getByTestId('calendar-header-prev'));
  });

  test('should handle invalid dates', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);

    fireEvent.change(screen.getByTestId('custom'), { target: { value: '1' } });
  });

  test('should handle next month', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);

    fireEvent.change(screen.getByTestId('custom'), { target: { value: '12/11/2021' } });
    fireEvent.click(screen.getByTestId('custom'));
    fireEvent.click(screen.getByTestId('calendar-header-next-month'));
  });

  test('should reset header', () => {
    render(<DateRangeSelectDay onChange={jest.fn} type="custom" />);

    fireEvent.change(screen.getByTestId('custom'), { target: { value: '12/11/2021' } });
    fireEvent.click(screen.getByTestId('custom'));
    fireEvent.click(screen.getByTestId('calendar-reset-date'));
  });
});
