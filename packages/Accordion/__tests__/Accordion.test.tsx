import Button from "../../Button/src/Button";
import React from "react";
import Accordion from "../src/Accordion";
import { render, fireEvent } from '@testing-library/react'

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
  it('should match snapshot', () => {
    const { asFragment } = render(AccordionComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle on click', () => {
    const wrapper = render(AccordionComponent);
    const toggleAccordion = wrapper.getByTestId('toggle-accordion')
    fireEvent.click(toggleAccordion);
  })
});
