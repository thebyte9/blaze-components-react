import '@testing-library/jest-dom';

import React from 'react';
import { Tab, TabItem } from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

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
  });

  test('should give the selected TabItem the tabs__content class by default', () => {
    render(TabComponent);

    expect(screen.getByText('Advanced content here')).toHaveClass('tabs__content', 'current');
  });

  test('should use TabItem classes in place of tabs__content when provided', () => {
    render(
      <Tab selected={0}>
        <TabItem classes="p-4">Custom content here</TabItem>
        <TabItem title="Other">Other content here</TabItem>
      </Tab>
    );

    const content = screen.getByText('Custom content here');
    expect(content).toHaveClass('p-4');
    expect(content).not.toHaveClass('tabs__content');
  });

  test('should use selected prop as initial tab only', () => {
    render(
      <Tab selected={1}>
        <TabItem>Basic content here</TabItem>
        <TabItem title="Advanced">Advanced content here</TabItem>
        <TabItem title="Other">Other content here</TabItem>
      </Tab>
    );

    expect(screen.getByText('Advanced content here')).toBeInTheDocument();
  });
});
