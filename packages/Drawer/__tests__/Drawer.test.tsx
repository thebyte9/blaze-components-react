import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Drawer from "../src";

const DrawerComponent = (
  <Drawer modifier="right" title="Drawer Component">
    <Drawer.DrawerMainContent>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
    </Drawer.DrawerMainContent>
    <Drawer.DrawerPageContent>
      <p>Cum assumenda ullam explicabo nostrum nam natus.</p>
    </Drawer.DrawerPageContent>
  </Drawer>
);

describe("Drawer component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(DrawerComponent);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should toggle on click", () => {
    const wrapper = mount(DrawerComponent);

    wrapper
      .find(".icon-button")
      .at(1)
      .simulate("click");
    expect(wrapper.find(".open").length).toEqual(1);

    wrapper
      .find(".icon-button")
      .at(1)
      .simulate("click");
    expect(wrapper.find(".open").length).toEqual(0);
  });
});
