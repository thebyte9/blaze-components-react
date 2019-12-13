import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import ToastContainer from "../../../src/Toast/ToastContainer/ToastContainer";

describe("Toast container", () => {
  it("should be defined", () => {
    expect(ToastContainer).toMatchSnapshot();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <ToastContainer hasToasts={true} placement="top-right">
        <div>Fake.children.implementation</div>
      </ToastContainer>
    );

    expect(container).toMatchSnapshot();
  });
});
