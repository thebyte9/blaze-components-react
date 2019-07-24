import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Switches from "../src";

const options = [
  {
    id: 1,
    label: "Switch text"
  },
  {
    id: 2,
    label: "Switch text"
  },
  {
    disabled: true,
    label: "Disabled"
  }
];

const single = {
  label: "Switch text",
  required: true
};

const defaultProps = (override = {}) => ({
  onChange: () => ({}),
  options,
  ...override
});

describe("Switches component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Switches {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should toggle Switch on click", () => {
    const override = {
      modifier: Switches.availableModifiers.secondary,
      options: single,
      returnBoolean: true
    };

    const wrapper = mount(<Switches {...defaultProps(override)} />);

    wrapper
      .find("input")
      .at(0)
      .simulate("change");

    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("checked")
    ).toBe(true);
  });

  test("can't interact when Switch is disabled", () => {
    const wrapper = mount(<Switches {...defaultProps()} />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change");
    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("checked")
    ).toBe(true);

    wrapper
      .find("input")
      .at(2)
      .simulate("change");
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("checked")
    ).toBe(false);
  });
});
