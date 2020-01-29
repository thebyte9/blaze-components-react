import { fireEvent, render } from "@testing-library/react";
import { mount } from "enzyme";
import "jest-dom/extend-expect";
import React from "react";
import RangeFilter from "../src";

const initialValue = {
  range: {
    max: 10,
    min: 0,
    step: 0,
    value: 7
  }
};
const defaultProps = (override: object = {}) => ({
  error: true,
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

  test("should renders Range with label", () => {
    const label = "range label";
    const expectedValue = "7";

    const override = {
      id: 1,
      label
    };

    const { getByLabelText } = render(
      <RangeFilter {...defaultProps(override)} />
    );

    const input = getByLabelText(label);

    expect(input).toHaveValue(expectedValue);
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

  test("should handle change event", () => {
    interface IOnChangeArgs {
      value?: {
        value?: string;
        step?: number;
        min?: number;
        max?: number;
      };
      event: React.ChangeEvent<HTMLInputElement>;
    }

    let stateValue: any = {};
    const newRangeValue = 5;

    const onChange = (args: IOnChangeArgs): void => {
      const { value } = args;
      stateValue = value;
    };

    const { getByTestId } = render(
      <RangeFilter {...defaultProps({ onChange })} />
    );

    fireEvent.change(getByTestId("input"), {
      target: {
        value: newRangeValue
      }
    });

    expect(getByTestId("input")).toHaveValue(newRangeValue.toString());
    expect(stateValue.range.value).toEqual(newRangeValue);
  });
});
