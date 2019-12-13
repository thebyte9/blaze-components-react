import { render } from "@testing-library/react";
import expect from "expect";
import { ToastElement } from "../../../src/Toast/ToastElement";

describe("Toast Element", () => {
  it("should be defined", () => {
    expect(ToastElement).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(<ToastElement />);
    expect(container).toMatchSnapshot();
  });
});
