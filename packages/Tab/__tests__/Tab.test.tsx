import '@testing-library/jest-dom';

import { Tab, TabItem } from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';

const TabComponent = (
  <Tab selected={1}>
    <TabItem>Basic content here</TabItem>
    <TabItem title="Advanced">Advanced content here</TabItem>
    <TabItem title="Other">Other content here</TabItem>
  </Tab>
);

describe('Tab component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(TabComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should navigate to the Advanced tab and display its content', () => {
    render(TabComponent);

    const button = screen.getByText('Advanced');
    fireEvent.click(button);

    expect(screen.getByText('Advanced content here')).toBeInTheDocument();

  });

  test('should handle conditional rendering of TabItems correctly', () => {
    render(<Tab selected={1}>
      <TabItem>Basic content here</TabItem>
      <TabItem title="Advanced">Advanced content here</TabItem>
      {false && <TabItem title="Conditional">Other content here</TabItem>}
    </Tab>);

    const button = screen.getByText('Advanced');
    fireEvent.click(button);

    expect(screen.getByText('Advanced')).toBeInTheDocument();
    expect(() => screen.getByText('Conditional')).toThrow('Unable to find an element');
    ;
  });

  test('should update selected tab when selected prop changes', () => {
    const { rerender } = render(
      <Tab selected={0}>
        <TabItem>Basic content here</TabItem>
        <TabItem title="Advanced">Advanced content here</TabItem>
        <TabItem title="Other">Other content here</TabItem>
      </Tab>
    );

    expect(screen.getByText('Basic content here')).toBeInTheDocument();

    rerender(
      <Tab selected={2}>
        <TabItem>Basic content here</TabItem>
        <TabItem title="Advanced">Advanced content here</TabItem>
        <TabItem title="Other">Other content here</TabItem>
      </Tab>
    );

    expect(screen.getByText('Other content here')).toBeInTheDocument();
  });
});
