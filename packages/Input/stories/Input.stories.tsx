import { storiesOf } from "@storybook/react";
import React from "react";
import inputReadme from "../README.md";
import Input from "../src";
storiesOf("Text Inputs", module)
  .addParameters({
    readme: {
      sidebar: inputReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Text Inputs</h1>
        <p>Create basic single-line text fields.</p>
      </section>

      <h4>Required</h4>
      <Input
        label="Text input required"
        placeholder="Enter email"
        validationMessage="Email address is required"
        onChange={(): void => { return; }}
        type="email"
        required
        error
      />

      <h4>Disabled</h4>
      <Input
        label="Text input disabled"
        placeholder="Placeholder text"
        onChange={(): void => { return; }}
        modifier="full-width"
        hideTypeToggle
        disabled
      />

      <h4>Password toggle type</h4>
      <Input
        label="Password - show hide"
        placeholder="******"
        onChange={(): void => { return; }}
        type="password"
        value="Lorem ipsum"
      />
    </div>
  ));
