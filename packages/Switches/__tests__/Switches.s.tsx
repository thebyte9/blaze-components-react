import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Checkboxes from "../src";

const options = [
  { label: "Example", value: 1, id: "one" },
  {
    id: "two",
    label: "I accept",
    required: true,
    value: "accepted"
  },
  {
    disabled: true,
    id: "three",
    label: "Disabled",
    value: ""
  }
];

describe("Checkboxes component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(
      <Checkboxes options={options} onChange={() => {}} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should toggle checkbox on click", () => {
    const wrapper = shallow(
      <Checkboxes bool withEffect options={options} onChange={() => {}} />
    );

    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("checked")
    ).toBe(false);

    wrapper
      .find(".form-field")
      .at(1)
      .simulate("click");

    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("checked")
    ).toBe(true);
  });

  test("can't interact when checkbox is disabled", () => {
    const wrapper = shallow(
      <Checkboxes options={options} onChange={() => {}} />
    );

    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("disabled")
    ).toBe(true);

    wrapper
      .find(".form-field")
      .at(2)
      .simulate("click");

    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("checked")
    ).toBe(false);
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("disabled")
    ).toBe(true);
  });
});
