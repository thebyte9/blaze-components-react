import { act, cleanup, render, screen, fireEvent } from '@testing-library/react';

import React from 'react';
import ToastContext from '../../../src/Toast/ToastContext';
import ToastProvider from '../../../src/Toast/ToastProvider/ToastProvider';
import expect from 'expect';

jest.mock('../../../src/Toast/ToastContext', () => ({
  Provider: jest.fn(({ children }) => children),
}));

const FakeToasterTitleImplementation = 'Test toaster';
const FakeToasterConfigImplementation = {
  appearance: 'success',
  autoDismiss: true,
};
const FakeChildrenComponentImplementation: any = jest.fn(({ children: subChildren }) => <div>{subChildren}</div>);

describe('Toast provider', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(ToastProvider).toBeDefined();
  });

  it('should render without throwing error', () => {
    const { asFragment } = render(
      <ToastProvider>
        <div>children toastprovider component</div>
      </ToastProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should dismiss a toast when clicked', () => {
    const ref = React.createRef();
    render(
      <ToastProvider ref={ref}>
        <div>children toastprovider component</div>
      </ToastProvider>,
    );

    ref.current.add(FakeToasterTitleImplementation, FakeToasterConfigImplementation);
    fireEvent.click(screen.getByTestId('toast-dismiss-button'));
  });

  it('should not duplicate toasts', () => {
    const ref = React.createRef();
    render(
      <ToastProvider ref={ref}>
        <div>children toastprovider component</div>
      </ToastProvider>,
    );

    ref.current.add(FakeToasterTitleImplementation, FakeToasterConfigImplementation);
    ref.current.add(FakeToasterTitleImplementation, FakeToasterConfigImplementation);
  });

  it('should add a new toaster', () => {
    render(
      <ToastProvider>
        <FakeChildrenComponentImplementation />
      </ToastProvider>,
    );

    const [
      [
        {
          value: { add },
        },
      ],
    ] = ToastContext.Provider.mock.calls;

    act(() => {
      add(FakeToasterTitleImplementation, FakeToasterConfigImplementation);
    });

    const [
      ,
      [
        {
          value: { toasts },
          children,
        },
      ],
    ] = ToastContext.Provider.mock.calls;

    expect(toasts).toStrictEqual([
      expect.objectContaining({
        content: FakeToasterTitleImplementation,
        ...FakeToasterConfigImplementation,
      }),
    ]);

    expect(children).toMatchSnapshot();
  });
});
