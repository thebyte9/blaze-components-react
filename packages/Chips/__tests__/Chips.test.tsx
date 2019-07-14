import Avatar from "@blaze-react/avatar";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Chips from "../src";

describe("Chip component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(
      <Chips>
        <Chips.Label>Basic chip</Chips.Label>
      </Chips>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should delete Chip", () => {
    const wrapper = mount(
      <Chips modifiers={["deletable", "small"]} action={() => ({})}>
        <Chips.Avatar>
          <Avatar username="Lorem Ipsum" modifier="x-small" />
        </Chips.Avatar>
        <Chips.Label>Primary deletable chip</Chips.Label>
        <Chips.Icon modifier="delete">
          <i className="material-icons">delete</i>
        </Chips.Icon>
      </Chips>
    );

    wrapper
      .find(".chip__icon")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".chip__wrapper")).toHaveLength(0);
  });
});
