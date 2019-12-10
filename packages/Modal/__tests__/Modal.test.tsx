import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import { act } from 'react-dom/test-utils';
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
  beforeEach(() => jest.clearAllMocks());

  it("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Modal {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it("should close modal on overlay clicked", () => {
    const wrapper = mount(<Modal {...defaultProps()} />);
    wrapper
      .find(".overlay")
      .at(0)
      .simulate("click");
    expect(props.onClose).toHaveBeenCalled();
  });

  it("should render and close alert modal", () => {
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

  it("should render and close alert modal on press escape key", () => {
    const map: any = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    document.removeEventListener = jest.fn((event, callback) => {
      map[event] = undefined;
    });

    const actions = [
      {
        callback: () => ({}),
        modifiers: ["alert", "small"],
        textButton: "delete"
      }
    ];

    const override = {
      actions,
      isAlert: true,
    };

    const wrapper = mount(<Modal {...defaultProps(override)} />);

    act(() => {
      map.keydown({ keyCode: 43 })
    });
    expect(props.onClose).not.toHaveBeenCalled();

    act(() => {
      map.keydown({ keyCode: 27 })
    });
    expect(props.onClose).toHaveBeenCalled();

    wrapper.unmount();
    expect(document.removeEventListener).toBeCalledWith("keydown", expect.any(Function), false);
  });

  it("should render and close scrollable modal", () => {
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
    expect(props.onClose).not.toHaveBeenCalled();
  });
});
