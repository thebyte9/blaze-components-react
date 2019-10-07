import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Badge from "../src";

describe("Badge component", () => {
  let BadgeComponent: any;
  beforeAll(() => {
    BadgeComponent = Badge.WrappedComponent;
  });

  const utils = {
    removeExtraSpaces: jest.fn()
  };

  test("should render children when badge type is link", () => {
    utils.removeExtraSpaces.mockReturnValueOnce("pagebuilder");
    const wrapper = shallow(
      <BadgeComponent type="pagebuilder" link utils={utils}>
        <a href="#"></a>
      </BadgeComponent>
    );
    const link = wrapper.find("a");
    expect(link.length).toBe(1);
  });

  test("should render children within span when badge type is not link", () => {
    const wrapper = shallow(
      <BadgeComponent type="primary" utils={utils}>
        <a href="#"></a>
      </BadgeComponent>
    );
    const span = wrapper.find("span");
    expect(span.length).toBe(1);
  });

  test.only("should render correct class when badge type is not link", () => {
    utils.removeExtraSpaces.mockReturnValueOnce(
      "pagebuilder badge--icon-text deep-orange"
    );
    const wrapper = shallow(
      <BadgeComponent type="pagebuilder" icon color="deep-orange" utils={utils}>
        Social follow         
        <i className="fas fa-share" />
      </BadgeComponent>
    );
    const span = wrapper.find("span");
    expect(span.prop("className")).toContain("pagebuilder");
    expect(span.prop("className")).toContain("badge--icon-text");
    expect(span.prop("className")).toContain("deep-orange");
  });

  test("should render badge type icon and badge type text", () => {
    const wrapper = shallow(
      <BadgeComponent type="pagebuilder" color="blue" icon utils={utils}>
        BadgeText         
        <i className="fas fa image" />
      </BadgeComponent>
    );
    const badge = wrapper.find("span");
    expect(badge.text()).toContain("BadgeText");
    const icon = wrapper.find("i");
    expect(icon.length).toBe(1);
  });

  test("should display correct class based on props", () => {
    utils.removeExtraSpaces.mockReturnValueOnce("badge--icon-text");
    const wrapper = shallow(
      <BadgeComponent icon utils={utils}>
        BadgeText
        <i className="fas fa-follow" />
      </BadgeComponent>
    );
    const span = wrapper.find("span");
    expect(span.prop("className")).toContain("badge--icon-text");
  });
});
