import { render, screen, waitFor } from '@testing-library/react';
import expect from 'expect';
import React from 'react';
import DefaultToast from '../../../src/Toast/DefaultToast';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('Default toast', () => {
  it('should be defined', () => {
    expect(DefaultToast).toBeDefined();
  });

  it('should render without throwing error', () => {
    const { asFragment } = render(
      <DefaultToast
        appearance={'warning'}
        autoDismiss={true}
        autoDismissTimeout={5000}
        isRunning={true}
        onDismiss={jest.fn()}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
      >
        <p>The current toasters is of type:warning</p>
      </DefaultToast>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should fire onDismiss event', () => {
    const onDismiss = jest.fn();

    render(
      <DefaultToast
        appearance={'warning'}
        autoDismiss={true}
        autoDismissTimeout={5000}
        isRunning={true}
        onDismiss={onDismiss}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
      >
        <p>The current toasters is of type:warning</p>
      </DefaultToast>,
    );

    const dismissButton = screen.getByTestId('toast-dismiss-button');
    userEvent.click(dismissButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
    screen.debug();
  });

  it('should render dismiss button if onDismiss callback is passed as prop', async () => {
    render(
      <DefaultToast
        appearance={'warning'}
        autoDismiss={true}
        autoDismissTimeout={5000}
        isRunning={true}
        onDismiss={jest.fn()}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
      >
        <p>The current toasters is of type:warning</p>
      </DefaultToast>,
    );

    await waitFor(() => {
      const dismissButton = screen.getByTestId('toast-dismiss-button');
      expect(dismissButton).toBeInTheDocument();
    });
  });
});
