import Button from "@blaze-react/button";
import { mount } from "enzyme";
import expect from "expect";
import React from "react";
import Accordion from "../src";

const AccordionComponent = (
  <Accordion>
    <Accordion.Header>
      <p>Accordion text 1</p>
      <p>Accordion text 2</p>
    </Accordion.Header>
    <Accordion.Content>
      <Accordion.ContentDetails>
        <p>Content here. Components can be placed in here if needed</p>
        <p>Footer can be added below if needed</p>
      </Accordion.ContentDetails>
      <Accordion.ContentFooter>
        <Button name="button" modifiers={["outline", "light", "rounded"]}>
          Cancel
        </Button>
        <Button name="button" modifiers={["rounded"]}>
          Save
        </Button>
      </Accordion.ContentFooter>
    </Accordion.Content>
  </Accordion>
);

describe("Accordion component", () => {
  test("should be defined and renders correctly (snapshot)", () => {
    const wrapper = mount(AccordionComponent);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  test("should toggle on click", () => {
    const wrapper = mount(AccordionComponent);

    wrapper
      .find(".icon-button--accordion")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .find(".accordion__content-wrapper")
        .at(0)
        .text()
    ).toContain("Content here.");

    wrapper
      .find(".icon-button--accordion")
      .at(0)
      .simulate("click");
  });
});
