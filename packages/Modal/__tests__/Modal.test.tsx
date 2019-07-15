import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Modal from "../src";

const defaultProps = (override: object = {}) => ({
  actions: [],
  buttonText: "Simple modal",
  isActive: true,
  onChange: () => void 0,
  simple: true,
  ...override
});

describe("Modal component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Modal {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should toggle modal on click button", () => {
    const wrapper = mount(<Modal {...defaultProps()} />);
    wrapper
      .find("Button")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".modal")).toHaveLength(0);
  });

  test("should render and close alert modal", () => {
    const actions = [["delete", () => ({}), "alert small"]];
    const override = {
      actions,
      alert: true,
      isActive: true,
      simple: false
    };
    const wrapper = mount(<Modal {...defaultProps(override)} />);
    expect(wrapper.find(".modal--alert")).toHaveLength(1);
    wrapper
      .find("Button")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".modal--alert")).toHaveLength(0);
  });

  test("should render and close scrollable modal", () => {
    const actions = [["Action 1", () => ({})], ["Action 2", () => ({})]];
    const override = {
      actions,
      alert: false,
      simple: false,
      title: "Scrollable Modal"
    };
    const wrapper = mount(<Modal {...defaultProps(override)} />);
    expect(wrapper.find(".modal__title").text()).toContain("Scrollable Modal");
    wrapper.find(".modal__close").simulate("click");
    expect(wrapper.find(".modal")).toHaveLength(0);
  });
});
