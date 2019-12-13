import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import withToastManager from "../../../src/Toast/withToastManager";

jest.mock("../../../src/Toast/ToastConsumer", () => (props: any) =>
  props.children("context")
);

describe("Hoc with toast manager", () => {
  it("should be defined", () => {
    expect(withToastManager).toBeDefined();
  });

  it("should fake moke implementation have been called with context", () => {
    const FakeComponentImplementation = jest.fn(() => (
      <div>withToastManager</div>
    ));
    const ToastManager = withToastManager(FakeComponentImplementation);
    render(<ToastManager />);

    expect(FakeComponentImplementation).toHaveBeenCalledWith(
      { toastManager: "context" },
      {}
    );
  });
});
