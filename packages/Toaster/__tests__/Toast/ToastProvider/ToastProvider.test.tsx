import { act, cleanup, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import ToastProvider from "../../../src/Toast/ToastProvider/ToastProvider";

jest.mock("../../../src/Toast/ToastContext", () => ({
  Provider: jest.fn(({ children }) => children)
}));

import ToastContext from "../../../src/Toast/ToastContext";

describe("Toast provider", () => {
  afterEach(cleanup);

  it("should be defined", () => {
    expect(ToastProvider).toBeDefined();
  });

  it("should render without throwing error", () => {
    const FakeChildrenComponentImplementation: any = () =>
      jest.fn(() => <div>children toastprovider component</div>);

    const { container } = render(
      <ToastProvider>
        <FakeChildrenComponentImplementation />
      </ToastProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it.only("should add a new toaster", () => {
    const FakeToasterTitleImplementation = "Test toaster";
    const FakeToasterConfigImplementation = {
      appearance: "success",
      autoDismiss: true
    };
    const FakeChildrenComponentImplementation: any = () =>
      jest.fn(children => <div>{children}</div>);

    render(
      <ToastProvider>
        <FakeChildrenComponentImplementation />
      </ToastProvider>
    );

    const [
      [
        {
          value: { add }
        }
      ]
    ] = ToastContext.Provider.mock.calls;

    act(() => {
      add(FakeToasterTitleImplementation, FakeToasterConfigImplementation);
    });

    console.log(
      "ToastContext.Provider.mock.calls",
      ToastContext.Provider.mock.calls[1][0].value.toasts
    );

    const [
      ,
      [
        {
          value: { toasts },
          children
        }
      ]
    ] = ToastContext.Provider.mock.calls;

    expect(toasts).toStrictEqual([
      expect.objectContaining({
        content: FakeToasterTitleImplementation,
        ...FakeToasterConfigImplementation
      })
    ]);
    expect(children).toMatchSnapshot();
  });
});
