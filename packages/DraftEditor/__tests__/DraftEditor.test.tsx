import { render } from "@testing-library/react";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import DraftEditor from "../src";

describe("DraftEditor component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = render(<DraftEditor />);
    expect(wrapper).toBeDefined();
  });

  test("should combine block controls with inline controls", () => {
    const wrapper = mount(<DraftEditor />);

    wrapper
      .find("span")
      .at(2)
      .simulate("mouseDown");
    wrapper
      .find("span")
      .at(12)
      .simulate("mouseDown");
  });

  test("should handle key command", () => {
    const wrapper = mount(<DraftEditor />);
    const editor = wrapper.find(".public-DraftEditor-content");
    editor.simulate("keyDown", {
      altKey: false,
      keyCode: 13
    });
    editor.simulate("keyDown", {
      altKey: false,
      ctrlKey: true,
      keyCode: 73,
      metaKey: false
    });
  });
});
