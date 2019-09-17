import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Modal from "../src";

const props = {
  actions: [],
  buttonText: "Simple modal",
  isSimple: true,
  onChange: () => void 0,
  onClose: jest.fn()
};

const defaultProps = (override: object = {}) => ({
  ...props,
  ...override
});

describe("Modal component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Modal {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should close modal on overlay clicked", () => {
    const wrapper = mount(<Modal {...defaultProps()} />);
    wrapper
      .find(".overlay")
      .at(0)
      .simulate("click");
    expect(props.onClose).toHaveBeenCalled();
  });

  test("should render and close alert modal", () => {
    const actions = [
      {
        callback: () => ({}),
        modifiers: ["alert", "small"],
        textButton: "delete"
      }
    ];
    const override = {
      actions,
      isAlert: true
    };
    const wrapper = mount(<Modal {...defaultProps(override)} />);
    expect(wrapper.find(".modal--alert")).toHaveLength(1);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(props.onClose).toHaveBeenCalled();
  });

  test("should render and close scrollable modal", () => {
    const actions = [
      {
        callback: () => ({}),
        textButton: "Action 1"
      },
      {
        callback: () => ({}),
        textButton: "Action 2"
      }
    ];

    const override = {
      actions,
      onClose: undefined,
      title: "Scrollable Modal"
    };

    const wrapper = mount(<Modal {...defaultProps(override)} />);

    expect(wrapper.find(".modal__title").text()).toContain("Scrollable Modal");

    wrapper.find(".modal__close").simulate("click");
    expect(props.onClose).toHaveBeenCalled();
  });
});
