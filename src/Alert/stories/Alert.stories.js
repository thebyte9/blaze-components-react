import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "../index";
import AlertReadme from '../README.md';

storiesOf("Alert", module)
  .addParameters({
    readme: {
      sidebar: AlertReadme,
    },
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Alerts</h1>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages. Alerts may have a
          type, be dismissable, include a close button, and contain any sort of
          children components.
        </p>
      </section>

      <section className="examplesSection">
        <h3>Examples</h3>
        <Alert>Simple Alert...</Alert>
        <Alert type="info">This is a info alert</Alert>
        <Alert icon="error" type="warning">This is a warning alert with icon</Alert>
        <Alert close type="success">This is a success alert that is closable.</Alert>
        <Alert type="primary">
          <p>Primary alert with content.</p>
          <ol>
            <li>lorem</li>
            <li>ipsum</li>
          </ol>
        </Alert>
      </section>
    </div>
  ));
