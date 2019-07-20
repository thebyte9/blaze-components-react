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
          <Button modifiers="outline">PLAIN</Button>
          <Button modifiers="outline rounded">ROUNDED</Button>
          <Button modifiers="outline cta">CTA</Button>
          <Button modifiers="outline disabled">DISABLED</Button>
          <Button modifiers="outline alert">ALERT</Button>
          <Button modifiers="outline light">LIGHT</Button>
          <Button modifiers="outline dark">DARK</Button>
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
          <Button modifiers="cta rounded">CTA</Button>
          <Button modifiers="alert rounded">ALERT</Button>
          <Button modifiers="light rounded">LIGHT</Button>
          <Button modifiers="dark rounded">DARK</Button>
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
          <Button modifiers="small">Small</Button>
          <Button modifiers="full-width">Full width</Button>
        </div>
      </section>
    </div>
  ));
