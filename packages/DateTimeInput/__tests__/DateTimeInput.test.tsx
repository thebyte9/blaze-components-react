import { mount } from "enzyme";
import "jest-dom/extend-expect";
import React from "react";
import DateTimeInput from "../src";
import { TYPE_DATE_TIME } from "../src/constants";

const defaultProps = (override: object = {}) => ({
  error: true,
  onChange: () => void 0,
  type: TYPE_DATE_TIME,
  ...override,
});

describe("DateTimeInput component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<DateTimeInput {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
