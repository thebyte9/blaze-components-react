import { fireEvent, render } from "@testing-library/react";
import { mount } from "enzyme";
import "jest-dom/extend-expect";
import React from "react";
import Input from "../src";

const defaultProps = (override: object = {}) => ({
  onChange: () => void 0,
  placeholder: "Placeholder text",
  ...override
});

describe("Input component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<Input {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("visibility should be off", () => {
    const override = {
      type: "password"
    };

    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    expect(getByTestId("toggle-input-type")).toHaveClass("active");
    expect(getByTestId("toggle-input-type")).toHaveTextContent(
      "visibility_off"
    );
  });

  test("should renders input with label", () => {
    const label = "Text input label";
    const value = "lorem ipsum";

    const override = {
      id: 1,
      label,
      value
    };

    const { getByLabelText } = render(<Input {...defaultProps(override)} />);

    const input = getByLabelText(label);

    expect(input).toHaveValue(value);
  });

  test("should show or hide password on toggle", () => {
    const override = {
      type: "password"
    };

    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    fireEvent.click(getByTestId("toggle-input-type"));

    expect(getByTestId("toggle-input-type")).toHaveClass("hide");
    expect(getByTestId("toggle-input-type")).toHaveTextContent("visibility");

    fireEvent.click(getByTestId("toggle-input-type"));

    expect(getByTestId("toggle-input-type")).toHaveClass("active");
    expect(getByTestId("toggle-input-type")).toHaveTextContent(
      "visibility_off"
    );
  });

  test("should display validation message", () => {
    let override = {
      error: true,
      modifier: "full-width",
      placeholder: "Enter email",
      required: true
    };

    const { getByTestId, rerender } = render(
      <Input {...defaultProps(override)} />
    );

    expect(getByTestId("validation-message")).toHaveTextContent(
      "This field is required"
    );

    const validationMessage = "Email address is required";

    override = {
      ...override,
      ...{ validationMessage }
    };

    rerender(<Input {...defaultProps(override)} />);

    expect(getByTestId("validation-message")).toHaveTextContent(
      validationMessage
    );
  });

  test("should change input", () => {
    interface IOnChangeArgs {
      value: string;
      event: React.ChangeEvent<HTMLInputElement>;
    }

    let stateValue: string = "";

    const onChange = (args: IOnChangeArgs): void => {
      const { value } = args;
      stateValue = value;
    };

    const override = {
      onChange
    };

    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    const inputValue = "lorem ipsum";

    fireEvent.change(getByTestId("input"), {
      target: {
        value: inputValue
      }
    });

    expect(getByTestId("input")).toHaveValue(inputValue);
    expect(stateValue).toEqual(inputValue);
  });

  test("should display error message if input value is initially null", () => {
    const override = { value: null };
    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    expect(getByTestId("validation-message")).toHaveTextContent(
      "This field is required"
    );
  });
  test("should display error message if input value is initially undefined", () => {
    const override = { value: undefined };
    const { getByTestId } = render(<Input {...defaultProps(override)} />);

    expect(getByTestId("validation-message")).toHaveTextContent(
      "This field is required"
    );
  });
});
