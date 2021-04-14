import { act, cleanup, render } from '@testing-library/react';

import React from 'react';
import ToastContext from '../../../src/Toast/ToastContext';
import ToastProvider from '../../../src/Toast/ToastProvider/ToastProvider';
import expect from 'expect';

jest.mock('../../../src/Toast/ToastContext', () => ({
  Provider: jest.fn(({ children }) => children),
}));

describe('Toast provider', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(ToastProvider).toBeDefined();
  });

  it('should render without throwing error', () => {
    const { container } = render(
      <ToastProvider>
        <div>children toastprovider component</div>
      </ToastProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should add a new toaster', () => {
    const FakeToasterTitleImplementation = 'Test toaster';
    const FakeToasterConfigImplementation = {
      appearance: 'success',
      autoDismiss: true,
    };
    const FakeChildrenComponentImplementation: any = jest.fn(({ children: subChildren }) => <div>{subChildren}</div>);

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
