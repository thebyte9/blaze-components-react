import "@blaze-react/components-styles";
import { storiesOf } from "@storybook/react";
import React from "react";
import DndReadme from "../README.md";
import DemoComponent from "./DemoComponent";

storiesOf("DnD", module)
  .addParameters({
    readme: {
      sidebar: DndReadme
    }
  })
  .add("Introduction", () => <DemoComponent />);
