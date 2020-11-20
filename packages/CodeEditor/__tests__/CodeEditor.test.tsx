import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import CodeEditor from "../src";

interface ICodeEditorProps {
  value: string;
  onChange: () => {};
}

const defaultProps = (override = {}): ICodeEditorProps => ({
  onChange: () => ({}),
  value: "lorem ipsum",
  ...override,
});

describe("CodeEditor component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<CodeEditor {...defaultProps()} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
