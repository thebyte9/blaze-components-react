import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import ToastConsumer from "../../../src/Toast/ToastConsumer";
import ToastProvider from "../../../src/Toast/ToastProvider";

describe("Toast consumer", () => {
  it("should be defined", () => {
    expect(ToastConsumer).toBeDefined();
  });

  it("should pass the context to the children", () => {
    const FakeChildrenImplementation: any = jest.fn(() => (
      <div>Fake.ToastConsumer.Children.immplementation</div>
    ));

    const Provider: any = ToastProvider;

    const { container } = render(
      <Provider>
        <ToastConsumer>
          {ctx => <FakeChildrenImplementation {...ctx} />}
        </ToastConsumer>
      </Provider>
    );

    expect(container).toMatchSnapshot();
    expect(FakeChildrenImplementation).toHaveBeenCalledWith(
      expect.objectContaining({
        add: expect.any(Function),
        remove: expect.any(Function),
        removeAll: expect.any(Function),
        toasts: [],
        update: expect.any(Function)
      }),
      {}
    );
  });
});
