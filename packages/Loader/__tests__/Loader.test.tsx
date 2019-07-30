import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import { ProgressBar, Spinner } from "../src";

interface IStep {
  start: number;
  final: number;
  color?: string;
  icon?: string;
  height?: number;
}

const steps: IStep[] = [
  {
    start: 0,
    final: 99,
    color: "#ffc107",
    icon: "priority_high"
  },
  {
    start: 99,
    final: 100,
    color: "#4caf50",
    icon: "done"
  }
];

describe("Loader component", () => {
  test("ProgressBar - should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<ProgressBar progress={0} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("Spinner - should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should render Cutom ProgressBar with steps", () => {
    const wrapper = mount(
      <ProgressBar
        steps={steps}
        progress={10}
        message={{
          incomplete: "Loading...",
          status: "10%",
          position: ProgressBar.position.left
        }}
      />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
