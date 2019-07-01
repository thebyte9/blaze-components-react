import { storiesOf } from "@storybook/react";
import React from "react";
import AccordionReadme from "../README.md";
import Accordion from "../src";
storiesOf("Accordion", module)
  .addParameters({
    readme: {
      sidebar: AccordionReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <Accordion>
        <Accordion.Header>
          <p>Accordion text 1111111</p>
          <p>Accordion text 2</p>
        </Accordion.Header>
        <Accordion.Content>
          <Accordion.ContentDetails>
            <p>Content here. Components can be placed in here if needed</p>
            <p>Footer can be added below if needed</p>
          </Accordion.ContentDetails>
          <Accordion.ContentFooter>
            <button type="button" name="button" className="button button--outline button--light button--rounded">Cancel</button>
            <button type="button" name="button" className="button button--rounded">Save</button>
          </Accordion.ContentFooter>
        </Accordion.Content>
      </Accordion>
    </div>
  ));
