import { render } from "@testing-library/react";
import { mount } from "enzyme";
import "jest-dom/extend-expect";
import React from "react";
import RangeFilter from "../src";

const initialValue = {
  max: 20,
  min: 0,
  step: 1,
  minValue: 5,
  maxValue: 10
};
const defaultProps = (override: object = {}) => ({
  error: true,
  name: "_test_",
  onChange: () => void 0,
  placeholder: "Placeholder text",
  value: initialValue,
  ...override
});

describe("RanngeFilter component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<RangeFilter {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should display validation message", () => {
    let override = {
      error: true,
      modifier: "full-width",
      placeholder: "Select a range",
      required: true
    };

    const { getByTestId, rerender } = render(
      <RangeFilter {...defaultProps(override)} />
    );

    expect(getByTestId("validation-message")).toHaveTextContent(
      "This field is required"
    );

    const validationMessage = "Range field is required";

    override = {
      ...override,
      ...{ validationMessage }
    };

    rerender(<RangeFilter {...defaultProps(override)} />);

    expect(getByTestId("validation-message")).toHaveTextContent(
      validationMessage
    );
  });
});
