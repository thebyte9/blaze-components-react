import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import ToastElement from "../../../src/Toast/ToastElement";

describe("Toast Element", () => {
  it("should be defined", () => {
    expect(ToastElement).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <ToastElement
        appearance="success"
        children={jest.fn(() => (
          <div>children.content</div>
        ))}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
