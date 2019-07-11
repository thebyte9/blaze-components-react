import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Multiselect from "../src";

const data = {
  keyValue: "name",
  filterBy: ["name"],
  data: [
    {
      id: 1,
      name: "Project1"
    },
    {
      id: 2,
      name: "Project2"
    },
    {
      id: 3,
      name: "Project3"
    }
  ]
};

const MultiselectComponent = <Multiselect data={data} selected={() => {}} />;

describe("Multiselect component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(MultiselectComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should select first option", () => {
    const wrapper = mount(MultiselectComponent);

    wrapper
      .find(".form-group--checkbox")
      .at(0)
      .simulate("click");

    expect(
      wrapper
        .find("div")
        .at(0)
        .text()
    ).toContain("Project1");
  });

  test("should allow to filter", () => {
    const wrapper = mount(MultiselectComponent);

    wrapper
      .find("input")
      .at(0)
      .simulate("keyUp", { target: { value: "Project2" } });
    expect(
      wrapper
        .find(".form-group--checkbox")
        .at(0)
        .text()
    ).toContain("Project2");
  });
});
