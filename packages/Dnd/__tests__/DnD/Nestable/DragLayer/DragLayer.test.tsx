import { cleanup, render } from "@testing-library/react";
import React from "react";
import DragLayer from "../../../../src/DragLayer";
import { dragLayerProps } from "../../../mocks/dnd";

describe("Drag layer", () => {
  afterEach(cleanup);

  it("should be defined", () => {
    expect(DragLayer).toBeDefined();
  });

  it("should render without throwing error", () => {
    document.querySelector = jest.fn();
    const { mockReturnValue }: any = document.querySelector;
    mockReturnValue({ clientWidth: 300 });
    const { container } = render(<DragLayer {...dragLayerProps} />);
    expect(container).toMatchSnapshot();
  });
});
