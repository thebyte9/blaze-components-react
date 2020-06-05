import Button from "@blaze-react/button";
import { storiesOf } from "@storybook/react";
import React from "react";
import AccordionReadme from "../README.md";
import Accordion from "../src";

storiesOf("Accordion", module)
  .addParameters({
    readme: {
      sidebar: AccordionReadme,
    },
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Accordion</h1>
      <Accordion>
        <Accordion.Header>
          <p>Accordion text</p>
          <p>Accordion text</p>
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
    </div>
  ));
