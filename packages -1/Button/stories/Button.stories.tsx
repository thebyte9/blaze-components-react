import { storiesOf } from "@storybook/react";
import React from "react";
import ButtonReadme from "../README.md";
import Button from "../src";

const showCaseDivStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  minHeight: "10em"
};
storiesOf("Button", module)
  .addParameters({
    readme: {
      sidebar: ButtonReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Buttons</h1>

      <section className="examplesSection">
        <p>
          You may use any of the available modifiers to easily create styled
          buttons.
        </p>

        <h4>Outline</h4>

        <p>
          Looking for a lighter touch? Use the
          <em>
            <strong> outline </strong>
          </em>
          modifier. You may combine this with any of the other modifiers
        </p>

        <div style={showCaseDivStyles}>
          <Button modifiers={[Button.availableModifiers.outline]}>PLAIN</Button>
          <Button
            modifiers={[
              Button.availableModifiers.outline,
              Button.availableModifiers.rounded
            ]}
          >
            ROUNDED
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.outline,
              Button.availableModifiers.cta
            ]}
          >
            CTA
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.outline,
              Button.availableModifiers.disabled
            ]}
          >
            DISABLED
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.outline,
              Button.availableModifiers.alert
            ]}
          >
            ALERT
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.outline,
              Button.availableModifiers.light
            ]}
          >
            LIGHT
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.outline,
              Button.availableModifiers.dark
            ]}
          >
            DARK
          </Button>
        </div>

        <h3>Rounded Buttons</h3>

        <p>
          Add the
          <em>
            <strong> rounded </strong>
          </em>
          modifier along with any type of button to create rounded buttons
        </p>

        <div style={showCaseDivStyles}>
          <Button
            modifiers={[
              Button.availableModifiers.cta,
              Button.availableModifiers.rounded
            ]}
          >
            CTA
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.alert,
              Button.availableModifiers.rounded
            ]}
          >
            ALERT
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.light,
              Button.availableModifiers.rounded
            ]}
          >
            LIGHT
          </Button>
          <Button
            modifiers={[
              Button.availableModifiers.dark,
              Button.availableModifiers.rounded
            ]}
          >
            DARK
          </Button>
        </div>

        <h3>Sizing</h3>

        <p>
          If you require small or full width buttons, use the
          <em>
            <strong> small </strong>
          </em>
          or
          <em>
            <strong> full-width </strong>
          </em>
          modifiers
        </p>

        <div style={showCaseDivStyles}>
          <Button modifiers={[Button.availableModifiers.small]}>Small</Button>
          <Button modifiers={[Button.availableModifiers.fullWidth]}>
            Full width
          </Button>
        </div>
      </section>
    </div>
  ));
