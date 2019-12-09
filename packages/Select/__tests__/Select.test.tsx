import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Select from "../src";

const defaultProps = (override: object = {}) => ({
  onChange: () => void 0,
  options: ["lorem", "ipsum"],
  ...override
});

describe("Select component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<Select {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should be disabled when none options", () => {
    const override = {
      label: "Select label",
      options: [],
      required: true
    };
    const wrapper = mount(<Select {...defaultProps(override)} />);
    expect(wrapper.find("select").prop("disabled")).toBe(true);
  });

  test("should render simple array of options", () => {
    const wrapper = mount(<Select {...defaultProps()} />);
    wrapper.find("select").simulate("change", { target: { value: "ipsum" } });
    expect(wrapper.find("select").prop("value")).toBe("ipsum");
  });

  test("should render array of array options", () => {
    const override = {
      onChange: undefined,
      options: [["08001", "Barcelona"]]
    };
    const wrapper = mount(<Select {...defaultProps(override)} />);
    wrapper.find("select").simulate("change", { target: { value: "08001" } });
    expect(wrapper.find("select").prop("value")).toBe("08001");
  });

  test("should render array of object options", () => {
    const override = {
      options: [
        {
          id: 1,
          username: "dev1"
        },
        {
          id: 2,
          username: "dev2"
        }
      ]
    };
    const wrapper = mount(<Select {...defaultProps(override)} />);
    wrapper.find("select").simulate("change", { target: { value: 1 } });
    expect(wrapper.find("select").prop("value")).toBe(1);
  });

  test("should render some options disabled", () => {
    const override = {
      disabled: ['ipsum']
    };
    const wrapper = mount(<Select {...defaultProps(override)} />);
    expect(wrapper).toMatchSnapshot();
  });
});
