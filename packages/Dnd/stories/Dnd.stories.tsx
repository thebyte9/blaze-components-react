import { storiesOf } from "@storybook/react";
import React from "react";
import DndReadme from "../README.md";
import Dnd from "../src";

storiesOf("Chips", module)
  .addParameters({
    readme: {
      sidebar: DndReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Dnd</h1>
      test
    </div>
  ));
