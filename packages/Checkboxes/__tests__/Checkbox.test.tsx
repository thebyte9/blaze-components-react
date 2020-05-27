import { fireEvent, render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import { Checkboxes } from "../src";

const options = [
  {
    id: 1,
    label: "first",
    value: "lorem ipsum",
  },
  {
    id: 2,
    label: "I accept",
    required: true,
    value: "accepted",
  },
  {
    id: 3,
    disabled: true,
    label: "Disabled",
    value: "",
  },
  {
    id: 4,
    label: "display none",
    show: false,
  },
];

const single = {
  label: "Single",
  value: "lorem ipsum",
};

const defaultProps = (override = {}) => ({
  onChange: () => ({}),
  options,
  ...override,
});

describe("Checkboxes component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Checkboxes {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should render and toggle single checkbox", () => {
    const override = {
      options: single,
      returnBoolean: true,
    };

    const wrapper = mount(<Checkboxes {...defaultProps(override)} />);

    expect(wrapper.find("input").length).toBe(1);

    expect(wrapper.find("input").at(0).prop("checked")).toBe(false);

    wrapper.find("input").at(0).simulate("click");

    expect(wrapper.find("input").at(0).prop("checked")).toBe(true);
  });

  test("should render multiple checkboxes and toggle", () => {
    let selectedBoxLabel: string = "";

    type TValue = object | any;

    const onChange = ({ value: [{ label }] }: TValue) => {
      selectedBoxLabel = label;
    };

    let override = {
      onChange,
    };

    const { rerender, getByTestId } = render(
      <Checkboxes {...defaultProps(override)} />
    );

    fireEvent.click(getByTestId("checkbox-1"));

    expect(selectedBoxLabel).toEqual("first");

    override = {
      ...override,
      ...{
        options: single,
      },
    };

    rerender(<Checkboxes {...defaultProps(override)} />);
  });

  test("can't interact when checkbox is disabled", () => {
    const wrapper = mount(<Checkboxes {...defaultProps()} />);

    wrapper.find(".form-field").at(2).simulate("click");

    expect(wrapper.find("input").at(2).prop("checked")).toBe(false);
  });
});
