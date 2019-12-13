import { cleanup, render } from "@testing-library/react";
import expect from "expect";
import React from "react";
import Icon from "../../src/Icon";

jest.mock("../../src/Toast/ToastCountdown", () =>
  jest.fn(() => <div>Toast.Countdown</div>)
);

import ToastCountdown from "../../src/Toast/ToastCountdown";

describe("Icon", () => {
  afterEach(cleanup);

  it("should be defined", () => {
    expect(Icon).toBeDefined();
  });

  it("should render withour throwing error", () => {
    const { container } = render(
      <Icon
        appearance={"success"}
        autoDismiss={true}
        autoDismissTimeout={3000}
        isRunning={false}
      ></Icon>
    );

    expect(container).toMatchSnapshot();
  });

  it("should child component recieve the expected props", () => {
    render(
      <Icon
        appearance={"success"}
        autoDismiss={true}
        autoDismissTimeout={3000}
        isRunning={false}
      ></Icon>
    );

    expect(ToastCountdown).toHaveBeenCalledWith(
      {
        autoDismissTimeout: 3000,
        isRunning: false,
        opacity: 1
      },
      {}
    );
  });
});
