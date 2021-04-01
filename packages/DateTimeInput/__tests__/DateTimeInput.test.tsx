import { mount } from "enzyme";
import "jest-dom/extend-expect";
import React from "react";
import DateTimeInput from "../src/DateTimeInput";
import { TYPE_DATE, TYPE_DATE_TIME, TYPE_TIME } from '../src/constants';

const defaultProps = (override: object = {}) => ({
  error: true,
  onChange: () => void 0,
  type: TYPE_DATE_TIME,
  ...override,
});

describe("DateTimeInput component", () => {
  test("should be defined and renders correctly type=dateTime (snapshot)", () => {
    const wrapper = mount(<DateTimeInput {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined and renders correctly type=date (snapshot)", () => {
    const wrapper = mount(<DateTimeInput {...defaultProps({ type: TYPE_DATE })} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined and renders correctly type=time (snapshot)", () => {
    const wrapper = mount(<DateTimeInput {...defaultProps({ type: TYPE_TIME })} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should be defined and renders correctly type=undefined (snapshot)", () => {
    const wrapper = mount(<DateTimeInput {...defaultProps({ type: undefined })}/>);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
