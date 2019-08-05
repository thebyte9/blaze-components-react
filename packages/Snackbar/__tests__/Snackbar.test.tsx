import { fireEvent, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import Snackbar from "../src";

const defaultProps = (override: object = {}) => ({
  duration: 3000,
  isActive: true,
  modifier: Snackbar.modifier.info,
  position: Snackbar.position.bottomRight,
  ...override
});

describe("Snackbar component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = render(<Snackbar {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("Should allow custom icon", () => {
    const { rerender } = render(
      <Snackbar {...defaultProps({ iconName: "lock" })} />
    );
    rerender(<Snackbar {...defaultProps({ modifier: "" })} />);
  });

  test("should close Snackbar", () => {
    const override = {
      duration: 0,
      onClose: () => ({})
    };

    const { container, getByText, rerender } = render(
      <Snackbar {...defaultProps()} />
    );

    const close1 = getByText("close");

    fireEvent.click(close1);
    expect(container.childElementCount).toBe(0);

    rerender(<Snackbar {...defaultProps(override)} />);

    const close = getByText("close");
    fireEvent.click(close);

    expect(container.childElementCount).toBe(0);
  });
});
