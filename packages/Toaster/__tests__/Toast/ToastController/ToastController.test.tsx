import { render, screen } from '@testing-library/react';
import expect from 'expect';
import React from 'react';
import ToastController from '../../../src/Toast/ToastController';

describe('Toast controller', () => {
  it('should be defined', () => {
    expect(ToastController).toBeDefined();
  });

  it('should render withour throwing error', () => {
    const Controller: any = ToastController;

    const { asFragment } = render(
      <Controller
        appearance="success"
        autoDismiss
        autoDismissTimeout={5000}
        component={jest.fn(() => (
          <div>component</div>
        ))}
        onDismiss={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
        key="1w232"
      >
        <p>The current toasters is of type:success</p>
      </Controller>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render withour throwing error', () => {
    const Controller: any = ToastController;

    const { asFragment } = render(
      <Controller
        appearance="success"
        autoDismiss
        autoDismissTimeout={5000}
        component={jest.fn(() => (
          <div>component</div>
        ))}
        onDismiss={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
        key="1w232"
      >
        <p>The current toasters is of type:success</p>
      </Controller>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
