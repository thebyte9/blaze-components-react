import { render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import ToastCountdown from "../../../src/Toast/ToastCountdown";

describe("Toast countdown", () => {
  it("should be defined", () => {
    expect(ToastCountdown).toBeDefined();
  });

  it("should render without throwing error", () => {
    const { container } = render(
      <ToastCountdown autoDismissTimeout={5000} isRunning={true} opacity={1} />
    );

    expect(container).toMatchSnapshot();
  });
});
