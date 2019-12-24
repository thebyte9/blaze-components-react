import { cleanup, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import DragHandler from "../../../../src/DragHandler";

describe("Drag handler", () => {
  afterEach(cleanup);
  it("should be defined", () => {
    expect(DragHandler).toBeDefined();
  });

  it("should render withouth throwing error", () => {
    const { container } = render(<DragHandler onDragStart={jest.fn} />);
    expect(container).toMatchSnapshot();
  });
});
