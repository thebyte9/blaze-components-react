import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Badge from "../src";

describe("Badge component", () => {
  test("should render children when badge type is link", () => {
    const wrapper = shallow(
      <Badge type="pagebuilder" link>
        <a href="#"></a>
      </Badge>
    );
    const link = wrapper.find("a");
    expect(link.length).toBe(1);
  });

  test("should render children within span when badge type is not link", () => {
    const wrapper = shallow(
      <Badge type="primary">
        <a href="#"></a>
      </Badge>
    );
    const span = wrapper.find("span");
    expect(span.length).toBe(1);
  });

  test("should render correct class when badge type is not link", () => {
    const wrapper = shallow(
      <Badge type="pagebuilder" icon color="deep-orange">
        Social follow         
        <i className="fas fa-share" />
      </Badge>
    );
    const span = wrapper.find("span");
    expect(span.prop("className")).toContain("pagebuilder");
    expect(span.prop("className")).toContain("badge--icon-text");
    expect(span.prop("className")).toContain("deep-orange");
  });

  test("should render badge type icon and badge type text", () => {
    const wrapper = shallow(
      <Badge type="pagebuilder" color="blue" icon>
        BadgeText         
        <i className="fas fa image" />
      </Badge>
    );
    const badge = wrapper.find("span");
    expect(badge.text()).toContain("BadgeText");
    const icon = wrapper.find("i");
    expect(icon.length).toBe(1);
  });

  test("should display correct class based on props", () => {
    const wrapper = shallow(
      <Badge icon>
        BadgeText
        <i className="fas fa-follow" />
      </Badge>
    );
    const span = wrapper.find("span");
    expect(span.prop("className")).toContain("badge--icon-text");
  });
});
