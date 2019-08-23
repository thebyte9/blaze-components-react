import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import { act } from "react-dom/test-utils";
import useDebounce from "../../../src/customHooks/useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should be defined", () => {
    expect(useDebounce).toBeDefined();
  });

  it("should be a function", () => {
    expect(typeof useDebounce).toBe("function");
  });

  it("put initialized value in first render", () => {
    function Component() {
      const value = useDebounce("Hello world", 1000);
      return <div id="test">{value}</div>;
    }
    const wrapper = mount(<Component />);
    const text = wrapper.find("#test").text();

    expect(text).toBe("Hello world");
  });

  it("will update value when timer is called", () => {
    function Component({ text }: { text: string }) {
      const value = useDebounce(text, 1000);
      return <div id="test">{value}</div>;
    }
    const tree = mount(<Component text={"Hello"} />);

    expect(tree.text()).toBe("Hello");

    act(() => {
      tree.setProps({ text: "Hello world" });
    });
    // timeout shouldn't have called yet
    expect(tree.text()).toBe("Hello");

    act(() => {
      jest.runAllTimers();
    });
    // after runAllTimer text should be updated
    expect(tree.text()).toBe("Hello world");
  });
});
