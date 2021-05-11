import '@testing-library/jest-dom';

import Progress from '../src/Progress';
import React from 'react';
import { render } from '@testing-library/react';

const steps = ['Cart', 'Billing', 'Delivery', 'Review & pay'];

describe('Alert component', () => {
  test('should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Progress progress={2} onChange={() => {}} steps={steps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be type count and change progress', () => {
    const handleChange = ({ step }: any) => expect(step).toEqual(4);

    const { asFragment } = render(<Progress progress={1} type="count" onChange={handleChange} steps={steps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
