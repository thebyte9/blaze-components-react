import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import ErrorMessage from "../../src/ErrorMessage";

describe("ErrorMessage function", () => {
  const defaultProps = {
    icon: "testIcon",
    message: "testMessage"
  };

  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage {...defaultProps} />);
  });

  it("should render without throwing error", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render jsx element", () => {
    wrapper = shallow(<ErrorMessage message={<p>Text</p>} />);
    expect(wrapper.find("p")).toBeTruthy();
  });
});
