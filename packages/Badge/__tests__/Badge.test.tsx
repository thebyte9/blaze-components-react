import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Badge from "../src";

describe("Badge component", () => {
  test("should render badge type link", () => {
    const wrapper = shallow(
      <Badge type="badge--pagebuilder" link>
        <a href="#"></a>
      </Badge>
    );
    const link = wrapper.find("a");
    expect(link.length).toBe(1);
  });

  test("should render badge type icon", () => {
    const wrapper = shallow(
      <Badge type="badge--pagebuilder" color="blue" icon>
        Dolor
        <i className="fas fa image" />
      </Badge>
    );
    const span = wrapper.find("span");
    expect(span.text()).toContain("Dolor");
  });

  test("should render badge without type", () => {
    const wrapper = shallow(<Badge>Test Badge</Badge>);
    expect(wrapper.prop("className")).toContain("badge");
  });
});
