import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "../src";
import tooltipReadme from "../README.md";
storiesOf("Tooltip", module)
  .addParameters({
    readme: {
      sidebar: tooltipReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Tooltips</h1>

      <p>
        Tooltips display informative text when users hover over or focus on an
        element.
      </p>

      <h4>Hover over any of the following tooltips</h4>

      <Tooltip text="Byte9" position="top">
        Tooltip on top
      </Tooltip>
      <br />
      <br />

      <Tooltip text="Byte9" position="bottom">
        Tooltip on bottom
      </Tooltip>
      <br />
      <br />

      <Tooltip text="Byte9" position="right">
        Tooltip on right
      </Tooltip>
      <br />
      <br />

      <Tooltip text="Byte9" position="left">
        Tooltip on left
      </Tooltip>
    </div>
  ));
