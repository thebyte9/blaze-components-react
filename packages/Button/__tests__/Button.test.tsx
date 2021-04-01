import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Button from "../src/Button";

const testProps = {
  modifiers: ["outline", "rounded"]
};

describe("Button component", () => {
  const wrapper = mount(<Button {...testProps} />);

  test("should be defined and renders correctly (snapshot)", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".button").length).toBe(1);
  });

  test("should be type button by default", () => {
    expect(wrapper.find(".button").props().type).toBe("button");
  });

  test("should be type submit when passing isSubmit prop", () => {
    expect(mount(<Button type="submit" />).props().type).toBe("submit");
  });
});
