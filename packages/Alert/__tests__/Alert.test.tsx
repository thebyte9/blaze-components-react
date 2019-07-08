import { fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Alert from "../src";

describe("Alert component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should close alert", () => {
    const { container, getByText } = render(
      <Alert close icon="error" type="warning" />
    );

    const close = getByText("close");
    fireEvent.click(close);

    expect(container.childElementCount).toBe(0);
  });
});
