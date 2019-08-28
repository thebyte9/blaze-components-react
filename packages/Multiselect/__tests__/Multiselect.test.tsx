import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Multiselect from "../src";

const data = {
  identification: "id",
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

const MultiselectComponent = <Multiselect data={data} selected={() => ({})} />;

describe("Multiselect component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(MultiselectComponent);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should select first option and clear selected", () => {
    const wrapper = mount(MultiselectComponent);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

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

    wrapper
      .find(".multiselect__clear")
      .at(0)
      .simulate("click");

    expect(wrapper.find(".chip__label").length).toBe(0);
  });

  test("should allow to filter", () => {
    const wrapper = mount(MultiselectComponent);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Project2" } });
    expect(
      wrapper
        .find(".form-group--checkbox")
        .at(0)
        .text()
    ).toContain("Project2");
  });
});
