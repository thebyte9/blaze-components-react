import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import More from "../src";
import MoreAvatar from "../src/MoreAvatar";
import MoreContent from "../src/MoreContent";

describe("More component", () => {
  let wrapper: any;

  afterEach(() => {
    wrapper.unmount();
  });

  test("should exist", () => {
    wrapper = mount(
      <More isMoreMenu>
        <More.Avatar isMoreMenu handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    expect(More).toBeDefined();
    expect(typeof More).toBe("function");
    expect(More.Avatar).toBeDefined();
    expect(typeof More.Avatar).toBe("function");
    expect(More.Content).toBeDefined();
    expect(typeof More.Content).toBe("function");
  });

  test("should be defined and renders correctly (snapshot)", () => {
    wrapper = mount(
      <More isMoreMenu>
        <More.Avatar isMoreMenu handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MoreAvatar).exists()).toBeTruthy();
    expect(wrapper.find(MoreContent).exists()).toBeTruthy();
  });

  test("should toggle on click and call onClose after second click (no overlay)", () => {
    const onClose = jest.fn();

    wrapper = mount(
      <More isMoreMenu onClose={onClose}>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .find("ul")
        .at(0)
        .hasClass("more-menu__list")
    ).toBe(true);

    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(onClose).toHaveBeenCalled();
  });

  test("should toggle on click and call onClose after second click (no overlay)", () => {
    const onClose = jest.fn();

    wrapper = mount(
      <More isMoreMenu onClose={onClose}>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .find("ul")
        .at(0)
        .hasClass("more-menu__list")
    ).toBe(true);

    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(onClose).toHaveBeenCalled();
  });

  test("should display classnames based on props", () => {
    wrapper = mount(
      <More isMoreMenu isHeader onClose={() => ({})}>
        <More.Avatar handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg toggled>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    expect(
      wrapper
        .find("ul")
        .at(0)
        .hasClass(
          "dropdown dropdown__list dropdown__list--header dropdown--header more-menu__list"
        )
    );
    expect(
      wrapper
        .find("li")
        .at(0)
        .hasClass(
          "dropdown__list-item dropdown__list-item--header more-menu__list-item"
        )
    );
  });

  test("should display classnames based on props", () => {
    wrapper = mount(
      <More isMoreMenu isHeader={false} onClose={() => ({})}>
        <More.Avatar handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    expect(
      wrapper
        .find("ul")
        .at(0)
        .hasClass("dropdown dropdown__list more-menu__list")
    );
    expect(
      wrapper
        .find("li")
        .at(0)
        .hasClass("dropdown__list-item more-menu__list-item")
    );
  });

  test("should display overlay when displayBg prop is true", () => {
    wrapper = mount(
      <More isMoreMenu displayBg>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu displayBg toggled>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".more-menu__background")).toHaveLength(1);
  });

  test("should not display overlay when displayBg prop is false", () => {
    wrapper = mount(
      <More isMoreMenu onClose={() => ({})}>
        <More.Avatar isHeader handleToggle={() => ({})}>
          <span className="material-icons">more_vert</span>
        </More.Avatar>
        <More.Content isMoreMenu>
          <a href="/">Link</a>
        </More.Content>
      </More>
    );
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".more-menu__background")).toHaveLength(0);
  });
});
