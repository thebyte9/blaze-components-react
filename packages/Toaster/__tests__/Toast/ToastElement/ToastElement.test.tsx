import { render, screen } from '@testing-library/react';
import expect from 'expect';
import React from 'react';
import ToastElement from '../../../src/Toast/ToastElement';
import '@testing-library/jest-dom/extend-expect';

describe('Toast Element', () => {
  it('should be defined', () => {
    expect(ToastElement).toBeDefined();
  });

  it('should render without throwing error', () => {
    const { asFragment } = render(
      <ToastElement
        appearance="success"
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
      >
        <div>children</div>
      </ToastElement>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should set height when transition state is `exiting`', () => {
    render(
      <ToastElement
        appearance="success"
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="exiting"
      >
        <div>children</div>
      </ToastElement>,
    );

    const toast = screen.getByTestId('toast');
    expect(toast).toHaveStyle('height: 0');
  });
});
