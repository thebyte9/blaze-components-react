import Button from "@blaze-react/button";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import ButtonSelect from "../src";

const component = (
  <ButtonSelect text="Actions">
    <Button>Settings</Button>
    <Button>Sign out</Button>
  </ButtonSelect>
);

describe("ButtonSelect component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(component);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
