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
  let container: HTMLDivElement;
  let requestAnimationFrame: ((callback: FrameRequestCallback) => number) & ((callback: FrameRequestCallback) => number);

  beforeEach(() => {
    requestAnimationFrame = window.requestAnimationFrame;
    container = document.createElement('div');

    document.body.appendChild(container);
  });

  afterEach(() => {
    window.requestAnimationFrame = requestAnimationFrame;

    document.body.removeChild(container);
  });

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

  it('should updated the current value when the user hits one of the arrow keys', () => {
    // const wrapper = mount(
    //   <RangeSlider {...defaultProps({ value: { min: 2, max: 8 } })} />
    // );
    // wrapper
    //   .find('InputRange')
    //   .at(0)
    //   .props.onChange(1);
    // await wrapper.update();
    const jsx = (
      <RangeSlider
        {...defaultProps({ value: { min: 2, max: 10 }, onChange: (value: any) => component.setProps({ value }) })}
      />
    );
    const component = mount(jsx);
    const slider = component.find(`Slider [onKeyDown]`).first();

    slider.simulate('keyDown', { keyCode: 37 });
    slider.simulate('keyUp', { keyCode: 37 });
    expect(component.props().value).toEqual({ min: 1, max: 10 });

    slider.simulate('keyDown', { keyCode: 39 });
    slider.simulate('keyUp', { keyCode: 39 });
    expect(component.props().value).toEqual({ min: 2, max: 10 });

    slider.simulate('keyDown', { keyCode: 39 });
    slider.simulate('keyUp', { keyCode: 39 });
    expect(component.props().value).toEqual({ min: 3, max: 10 });
  });

  it('does not respond to keyboard event when it is disabled', () => {
    const jsx = (
      <RangeSlider
        {...defaultProps({ disabled: true, value: 2, onChange: (value: any) => component.setProps({ value }) })}
      />
    );
    const component = mount(jsx);
    const slider = component.find(`Slider [onKeyDown]`).first();

    slider.simulate('keyDown', { keyCode: 37 });
    slider.simulate('keyUp', { keyCode: 37 });
    expect(component.props().value).toEqual(2);
  });

  it('displays the current value as a label', () => {
    const jsx = (
      <RangeSlider
        {...defaultProps({ value: { min: 2, max: 10 } })}
      />
    );
    const component = mount(jsx);
    const label = component.find('Slider Label').first();

    expect(label.text()).toEqual('2');
  });
});
