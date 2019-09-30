import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Avatar from "../src";

declare let window: any;

const dummyImage = {
  addEventListener: jest.fn((_, evtHandler) => {
    evtHandler();
  })
};

window.Image = jest.fn(() => dummyImage);

const url = "http://lorempixel.com/400/400/people/";

const defaultProps = (override: object = {}) => ({
  modifier: Avatar.availableModifiers.med,
  url,
  ...override
});

describe("Avatar component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<Avatar {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should load image", () => {
    const wrapper = mount(<Avatar {...defaultProps()} />);

    expect(wrapper.find("img").prop("src")).toContain(url);
  });

  test("The text of the avatar must be the initials of the username", () => {
    const overrid = {
      modifier: "",
      url: "",
      username: "Blaze 2"
    };

    const wrapper = mount(<Avatar {...defaultProps(overrid)} />);
    const span = wrapper.find("span");
    expect(span.text()).toContain("B2");
  });
});
