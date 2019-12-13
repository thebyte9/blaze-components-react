import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import DefaultToast from "../../../src/Toast/DefaultToast";

describe("Default toast", () => {
  it("should be defined", () => {
    expect(DefaultToast).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <DefaultToast
        appearance={"warning"}
        autoDismiss={true}
        autoDismissTimeout={5000}
        isRunning={true}
        onDismiss={jest.fn()}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        placement="top-right"
        transitionDuration={220}
        transitionState="entered"
      >
        <p>"The current toasters is of type:warning"</p>
      </DefaultToast>
    );

    expect(container).toMatchSnapshot();
  });
});
