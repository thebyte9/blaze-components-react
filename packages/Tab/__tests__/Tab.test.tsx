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

  test('should navigate between tabs', () => {
    render(TabComponent);

    const button = screen.getByText('Advanced');
    fireEvent.click(button);

    screen.getByText('Advanced');
  });
});
