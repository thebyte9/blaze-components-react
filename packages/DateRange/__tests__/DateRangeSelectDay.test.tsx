import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import DateRangeSelectDay from '../src/DateRangeSelectDay';
import React from 'react';
import { IDateRangeProps } from '../src/DateRangeSelectDay/DateRangeSelectDay';

const defaultProps = (override?: IDateRangeProps) => ({
  onChange: jest.fn(),
  selected: 'custom',
  ...override,
});

describe('DateRange component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<DateRangeSelectDay {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should select a value', () => {
    render(<DateRangeSelectDay {...defaultProps()} />);
    const input = screen.getByTestId('input');
    fireEvent.click(input);
    screen.debug();

    fireEvent.change(input, { target: { value: '11/12/2021' } });
  });

  // test('should select a value', () => {
  //   render(<DateRange {...defaultProps()} />);
  //   userEvent.change(screen.getByText('Please Choose...'), { target: { value: 'days, 30' } });
  // });
});
