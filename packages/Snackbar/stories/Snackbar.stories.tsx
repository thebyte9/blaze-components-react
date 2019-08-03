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
        <p>
          Lorem <a href="#">Link</a>
        </p>
      </Snackbar>

      <Snackbar
        position={Snackbar.position.bottomRight}
        modifier={Snackbar.modifier.info}
        isActive
      >
        <span>Lorem Ispum dolor</span>
      </Snackbar>

      <Snackbar
        position={Snackbar.position.topLeft}
        modifier={Snackbar.modifier.warning}
        isActive
      >
        <span>Lorem Ispum dolor</span>
      </Snackbar>

      <Notification>
        <span>
          Lorem Ispum dolorklkjsdlkjdlkdjlkds dsldslidslj sdjsdjlsdlj
          sdjdsjsdjkl jaskjasjk asjkjksa nbnbbnas mnmas mnmsan
          <a href="#">Link</a>
          lorem lo lo kahbas mas as kjas jjj lorem lo lo kahbas mas as kjas
          lorem lo lo kahbas mas as kjas lorem lo lo kahbas mas as kjas lorem lo
          lo kahbas mas as kjas lorem lo lo kahbas mas as kjas
        </span>
      </Notification>
    </div>
  ));
