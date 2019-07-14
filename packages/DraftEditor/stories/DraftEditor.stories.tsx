import { storiesOf } from "@storybook/react";
import React from "react";
import DraftEditorReadme from "../README.md";
import DraftEditor from "../src";
storiesOf("DraftEditor", module)
  .addParameters({
    readme: {
      sidebar: DraftEditorReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>DraftEditor</h1>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages. Alerts may have a
          type, be dismissable, include a close button, and contain any sort of
          children components.
        </p>
      </section>

      <h4>Simple</h4>
      <DraftEditor />
    </div>
  ));
