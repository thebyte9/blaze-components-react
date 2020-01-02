import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import RangeSlider from "../src";

const defaultProps = (override: object = {}) => ({
  minValue: 0,
  maxValue: 20,
  onChange: () => ({}),
  value: 12,
  ...override
});

describe("RangeSlider component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(
      <RangeSlider {...defaultProps()} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should be disabled", () => {
    const wrapper = mount(
      <RangeSlider {...defaultProps({ disabled: true })} />
    );

    expect(
      wrapper
        .find("InputRange")
        .at(0)
        .prop("disabled")
    ).toBe(true);
  });

  test("should set min, max and value correctly", () => {
    const wrapper = mount(
      <RangeSlider {...defaultProps()} />
    );

    expect(
      wrapper
        .find("span.input-range__label.input-range__label--min span")
        .at(0)
        .text()
    ).toBe("0");

    expect(
      wrapper
        .find("span.input-range__label.input-range__label--value span")
        .at(0)
        .text()
    ).toBe("12");

    expect(
      wrapper
        .find("span.input-range__label.input-range__label--max span")
        .at(0)
        .text()
    ).toBe("20");
  });

  test("should have custom step ", () => {
    const wrapper = mount(
      <RangeSlider {...defaultProps({ step: 4 })} />
    );

    expect(
      wrapper
        .find("InputRange")
        .at(0)
        .prop("step")
    ).toBe(4);
  });

  test("should have draggable track ", () => {
    const wrapper = mount(
      <RangeSlider {...defaultProps({ draggableTrack: true })} />
    );

    expect(
      wrapper
        .find("Track")
        .at(0)
        .prop("draggableTrack")
    ).toBe(true);
  });

  test("should have value with min and max", () => {
    const wrapper = mount(
      <RangeSlider {...defaultProps({ value: { min: 2, max: 8 } })} />
    );

    expect(
      wrapper
        .find("span.input-range__label.input-range__label--value span")
        .at(0)
        .text()
    ).toBe("2");

    expect(
      wrapper
        .find("span.input-range__label.input-range__label--value span")
        .at(1)
        .text()
    ).toBe("8");
  });
});
