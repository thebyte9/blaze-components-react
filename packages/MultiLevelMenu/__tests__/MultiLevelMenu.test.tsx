import { mount } from "enzyme";
import "jest-dom/extend-expect";
import React from "react";
import MultiLevelMenu from "../src";

const MultiLevelMenuComponent = (
  <MultiLevelMenu main={1}>
    <MultiLevelMenu.List id={1}>
      <MultiLevelMenu.Item to={2}>Lorem</MultiLevelMenu.Item>
    </MultiLevelMenu.List>

    <MultiLevelMenu.List id={2}>
      <MultiLevelMenu.Item>Ipsum</MultiLevelMenu.Item>
    </MultiLevelMenu.List>
  </MultiLevelMenu>
);

const activeMenuClass = ".multilevelmenu__sidemenu--show span";
const backLinkClass = ".multilevelmenu__backlink";

describe("MultiLevelMenu", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(MultiLevelMenuComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should navegate", () => {
    const wrapper = mount(MultiLevelMenuComponent);

    expect(
      wrapper
        .find(activeMenuClass)
        .at(0)
        .text()
    ).toContain("Lorem");

    wrapper
      .find(activeMenuClass)
      .at(0)
      .simulate("click");

    expect(
      wrapper
        .find(activeMenuClass)
        .at(0)
        .text()
    ).toContain("Ipsum");
  });

  test("should turn Back", () => {
    const wrapper = mount(MultiLevelMenuComponent);

    wrapper
      .find(activeMenuClass)
      .at(0)
      .simulate("click");

    wrapper
      .find(backLinkClass)
      .at(0)
      .simulate("click");

    expect(
      wrapper
        .find(activeMenuClass)
        .at(0)
        .text()
    ).toContain("Lorem");
  });
});
