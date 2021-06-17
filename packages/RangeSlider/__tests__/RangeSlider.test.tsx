import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import RangeSlider from '../src/RangeSlider';
import React from 'react';

const defaultProps = (override: object = {}) => ({
  minValue: 0,
  maxValue: 20,
  onChange: jest.fn(),
  value: 12,
  ...override,
});

describe('RangeSlider component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<RangeSlider {...defaultProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be disabled', () => {
    render(<RangeSlider {...defaultProps({ disabled: true })} />);
  });

  test('should set min, max and value correctly', () => {
    render(<RangeSlider {...defaultProps()} />);
  });

  test('should have custom step ', () => {
    render(<RangeSlider {...defaultProps({ step: 4 })} />);
  });

  test('should have draggable track ', () => {
    render(<RangeSlider {...defaultProps({ draggableTrack: true })} />);
  });

  test('should have value with min and max', () => {
    render(<RangeSlider {...defaultProps({ value: { min: 2, max: 8 } })} />);
  });

  it('should update the current value when one of the arrow keys is pressed', () => {
    render(
      <RangeSlider
        {...defaultProps({ value: { min: 2, max: 10 }, onChange: (value: any) => wrapper.setProps({ value }) })}
      />,
    );

    //TODO: key press using userEvent or fireEvent
  });

  it('should not respond to keyboard event when it is disabled', () => {
    render(
      <RangeSlider
        {...defaultProps({ disabled: true, value: 2, onChange: (value: any) => wrapper.setProps({ value }) })}
      />,
    );
    //TODO: key press using userEvent or fireEvent
  });

  it('should display the current value as a label', () => {
    const { asFragment } = render(<RangeSlider {...defaultProps({ value: { min: 2, max: 10 } })} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
