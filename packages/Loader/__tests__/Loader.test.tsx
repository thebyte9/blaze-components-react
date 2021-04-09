import '@testing-library/jest-dom';

import { ProgressBar, Spinner } from '../src';
import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';

interface IStep {
  start: number;
  final: number;
  backgroundColor?: string;
  icon?: string;
}

const steps: IStep[] = [
  {
    start: 0,
    final: 99,
    backgroundColor: ProgressBar.backgroundColor.orange,
    icon: 'priority_high',
  },
  {
    start: 99,
    final: 100,
    backgroundColor: ProgressBar.backgroundColor.green,
    icon: 'done',
  },
];

describe('Loader component', () => {
  test('ProgressBar - should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<ProgressBar progress={0} />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Spinner - should be defined and renders correctly (snapshot)', () => {
    const { asFragment } = render(<Spinner size={Spinner.size.small} />);
    expect(asFragment).toMatchSnapshot();
  });

  test('should render Custom ProgressBar with steps', () => {
    const { asFragment } = render(
      <ProgressBar
        steps={steps}
        progress={10}
        message={{
          incomplete: 'Loading...',
          position: ProgressBar.position.left,
          status: '10%',
        }}
      />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
