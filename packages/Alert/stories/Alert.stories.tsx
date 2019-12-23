import "@blaze-react/components-styles";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import AlertReadme from "../README.md";

storiesOf("Alert", module)
  .addParameters({
    readme: {
      sidebar: AlertReadme
    }
  })
  .add("Introduction", (): any => {
    const Alert: any = lazy((): any => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Alerts</h1>
            <p>
              Provide contextual feedback messages for typical user actions with
              the handful of available and flexible alert messages. Alerts may
              have a type, be dismissable, include a close button, and contain
              any sort of children components.
            </p>
          </section>

          <h4>Simple</h4>
          <Alert>Simple Alert...</Alert>

          <h4>With modifier</h4>
          <Alert type="info">This is a info alert</Alert>

          <h4>With icon</h4>
          <Alert icon="error" type="warning">
            This is a warning alert with icon
          </Alert>

          <h4>Dismissable</h4>
          <Alert close type="success">
            This is a success alert that is closable.
          </Alert>

          <h4>With extra content</h4>
          <Alert type="primary">
            <p>Primary alert with content.</p>
            <ol>
              <li>lorem</li>
              <li>ipsum</li>
            </ol>
          </Alert>
        </div>
      </Suspense>
    );
  });
