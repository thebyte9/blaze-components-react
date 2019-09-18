import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Multiselect from "../src";

const defaultProps = (override: object = {}) => ({
  data: {
    identification: "id",
    keyValue: "name",
    filterBy: ["name"],
    data: [
      {
        id: 1,
        name: "Blaze 1"
      },
      {
        id: 2,
        name: "Blaze 2"
      },
      {
        id: 3,
        name: "Blaze 3"
      }
    ]
  },
  selected: [
    {
      id: 1,
      name: "Blaze 1",
      description: "Lorem ipsum dolor.",
      checked: true
    }
  ],
  ...override
});

describe("Multiselect component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = shallow(<Multiselect {...defaultProps()} />);

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should select first option and clear selected", () => {
    const wrapper = mount(<Multiselect {...defaultProps()} />);

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
    ).toContain("Blaze 1");

    wrapper
      .find(".multiselect__clear")
      .at(0)
      .simulate("click");

    expect(wrapper.find(".chip__label").length).toBe(0);
  });

  test("should allow to filter", () => {
    const wrapper = mount(<Multiselect {...defaultProps()} />);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Blaze 2" } });
    expect(
      wrapper
        .find(".form-group--checkbox")
        .at(0)
        .text()
    ).toContain("Blaze 2");
  });

  test("should render without available data", () => {
    const override = {
      data: [],
      error: true,
      onChange: null
    };
    const wrapper = mount(<Multiselect {...defaultProps(override)} />);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus");

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Not found" } });

    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toContain("No records available");
  });

  test("should rerender on receive props", () => {
    const { rerender } = render(<Multiselect {...defaultProps()} />);

    const override = {
      data: {
        filterBy: ["name", "id"],
        identification: "id",
        keyValue: "name",
        data: [
          {
            id: 1,
            name: "Blaze 11",
            description: "Lorem ipsum dolor."
          }
        ]
      }
    };

    rerender(<Multiselect {...defaultProps(override)} />);
  });

  test("should be removed by clicking on the chip", () => {
    const wrapper = mount(<Multiselect {...defaultProps()} />);

    wrapper
      .find(".chip__icon")
      .at(0)
      .simulate("click");

    expect(wrapper.find(".chip__label").length).toBe(0);

    wrapper
      .find("input")
      .at(0)
      .simulate("focus")
      .simulate("keyDown", { key: "ArrowLeft" })
      .simulate("keyDown", { key: "Enter" });

    expect(
      wrapper
        .find(".chip__wrapper")
        .at(0)
        .text()
    ).toContain("Blaze 1");
  });
});
