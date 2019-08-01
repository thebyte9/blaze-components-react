import Button from "@blaze-react/button";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import SnackbarReadme from "../README.md";
import Snackbar from "../src";

const Notification = ({
  position,
  modifier,
  children
}: {
  position: string;
  modifier?: string;
  children: JSX.Element | JSX.Element[] | string;
}): JSX.Element => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div>
      <Button onClick={(): void => setActive(!active)}>Toggle</Button>
      <Snackbar
        position={position}
        modifier={modifier}
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
      <Notification
        position={Snackbar.position.bottomLeft}
        modifier={Snackbar.modifier.success}
      >
        <span>
          Lorem Ispum dolor mnnmnsd sdmbmnsd mnsdnm sdnnsdn,sd jllkaslasl
          sdmnsdmsd msmnsndm: <a href="#">Link</a>
          lorem lo lo kahbas mas as kjas lorem lo lo kahbas mas as kjas lorem lo
          lo kahbas mas as kjas lorem lo lo kahbas mas as kjas lorem lo lo
          kahbas mas as kjas lorem lo lo kahbas mas as kjas lorem lo lo kahbas
          mas as kjas
        </span>
      </Notification>

      <Notification
        position={Snackbar.position.bottomRight}
        modifier={Snackbar.modifier.info}
      >
        <i className="material-icons">info</i>
        <span>Lorem Ispum dolor</span>
      </Notification>

      <Notification
        position={Snackbar.position.topLeft}
        modifier={Snackbar.modifier.warning}
      >
        <i className="material-icons">warning</i>
        <span>Lorem Ispum dolor</span>
      </Notification>

      <Notification position={Snackbar.position.topRight}>
        <i className="material-icons">info</i>
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
