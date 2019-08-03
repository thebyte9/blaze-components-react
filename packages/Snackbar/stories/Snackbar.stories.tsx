import Button from "@blaze-react/button";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import SnackbarReadme from "../README.md";
import Snackbar from "../src";

const Notification = ({
  children
}: {
  children: JSX.Element | JSX.Element[] | string;
}): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={(): void => setActive(!active)}>Toggle</Button>
      <Snackbar
        modifier={Snackbar.position.topRight}
        isActive={active}
        onClose={(): void => setActive(false)}
      >
        {children}
      </Snackbar>
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
      <Snackbar
        position={Snackbar.position.bottomLeft}
        modifier={Snackbar.modifier.success}
        iconName="how_to_reg"
        duration={5000}
        isActive
      >
        Lorem <a href="#">Link</a>
      </Snackbar>

      <Snackbar
        position={Snackbar.position.bottomRight}
        modifier={Snackbar.modifier.info}
        isActive
      >
        Lorem Ispum dolor
      </Snackbar>

      <Snackbar
        position={Snackbar.position.topLeft}
        modifier={Snackbar.modifier.warning}
        isActive
      >
        Lorem Ispum dolor
      </Snackbar>

      <Notification>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <hr />
          <p>Ipsam ratione nam quae cumque sit</p>
        </div>
      </Notification>
    </div>
  ));
