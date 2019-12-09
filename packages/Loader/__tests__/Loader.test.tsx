import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import { ProgressBar, Spinner } from "../src";

interface IStep {
  start: number;
  final: number;
  backgroundColor?: string;
  icon?: string;
}

const steps: IStep[] = [
  {
    start: 0,
    final: 99,
    backgroundColor: ProgressBar.backgroundColor.orange,
    icon: "priority_high"
  },
  {
    start: 99,
    final: 100,
    backgroundColor: ProgressBar.backgroundColor.green,
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
    const wrapper = mount(<Spinner size={Spinner.size.small} />);
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
          position: ProgressBar.position.left,
          status: "10%"
        }}
      />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
