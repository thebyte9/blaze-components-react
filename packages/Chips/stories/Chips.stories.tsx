import Avatar from "@blaze-react/avatar";
import { storiesOf } from "@storybook/react";
import React from "react";
import ChipsReadme from "../README.md";
import Chips from "../src";

storiesOf("Chips", module)
  .addParameters({
    readme: {
      sidebar: ChipsReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Chips</h1>
      <Chips
        modifiers={[
          Chips.availableModifiers.parent.deletable,
          Chips.availableModifiers.parent.small
        ]}
      >
        <Chips.Avatar>
          <Avatar username="Lorem Ipsum" modifier="x-small" />
        </Chips.Avatar>
        <Chips.Label>Primary deletable chip</Chips.Label>
        <Chips.Icon modifier={Chips.availableModifiers.Icon}>
          <i className="material-icons">delete</i>
        </Chips.Icon>
      </Chips>
    </div>
  ));
