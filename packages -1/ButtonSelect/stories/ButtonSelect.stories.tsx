import Button from "@blaze-react/button";
import { storiesOf } from "@storybook/react";
import React from "react";
import ButtonSelectReadme from "../README.md";
import ButtonSelect from "../src";
const buttonStyles = {
  border: 0,
  borderRadius: 0
};
storiesOf("ButtonSelect", module)
  .addParameters({
    readme: {
      sidebar: ButtonSelectReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>ButtonSelect</h1>
      <p>
        The ButtonSelect component extends the button to show a list of actions.
      </p>
      <ButtonSelect text="Actions">
        <Button
          modifiers={[
            Button.availableModifiers.plain,
            Button.availableModifiers.fullWidth
          ]}
          style={buttonStyles}
        >
          Settings
        </Button>
        <Button
          modifiers={[
            Button.availableModifiers.plain,
            Button.availableModifiers.fullWidth
          ]}
          style={buttonStyles}
        >
          Sign out
        </Button>
        <Button
          modifiers={[
            Button.availableModifiers.plain,
            Button.availableModifiers.fullWidth
          ]}
          style={buttonStyles}
        >
          Help
        </Button>
      </ButtonSelect>
    </div>
  ));
