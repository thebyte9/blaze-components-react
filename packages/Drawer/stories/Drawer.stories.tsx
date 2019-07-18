import { storiesOf } from "@storybook/react";
import React from "react";
import DrawerReadme from "../README.md";
import Drawer from "../src";
// import Button from "@blaze-react/button";

storiesOf("Drawer", module)
  .addParameters({
    readme: {
      sidebar: DrawerReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Accordion</h1>
      <Drawer />
    </div>
  ));
