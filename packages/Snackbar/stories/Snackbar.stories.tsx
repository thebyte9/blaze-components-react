import Button from "@blaze-react/button";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import SnackbarReadme from "../README.md";
import Snackbar from "../src";

const Notification = ({ position }: { position: string }): JSX.Element => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div>
      <Button onClick={(): void => setActive(!active)}>Toggle</Button>
      <Snackbar
        position={position}
        isActive={active}
        onClose={(): void => setActive(false)}
      />
    </div>
  );
};

storiesOf("Snackbar", module)
  .addParameters({
    readme: {
      sidebar: SnackbarReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Snackbar</h1>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages. Alerts may have a
          type, be dismissable, include a close button, and contain any sort of
          children components.
        </p>
      </section>

      <h4>Simple</h4>
      <Notification position={Snackbar.position.bottomLeft} />
      <Notification position={Snackbar.position.bottomRight} />

      <Notification position={Snackbar.position.topLeft} />
      <Notification position={Snackbar.position.topRight} />
    </div>
  ));
