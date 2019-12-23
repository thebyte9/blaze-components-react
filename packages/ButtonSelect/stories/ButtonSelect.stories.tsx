import Button from "@blaze-react/button";
import "@blaze-react/components-styles";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import ButtonSelectReadme from "../README.md";

const buttonStyles = {
  border: 0,
  borderRadius: 0
};
storiesOf("ButtonSelect", module)
  .addParameters({
    readme: {
      sidebar: ButtonSelectReadme
    }
  })
  .add("Introduction", (): any => {
    const ButtonSelect = lazy(() => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>ButtonSelect</h1>
          <p>
            The ButtonSelect component extends the button to show a list of
            actions.
          </p>
          <ButtonSelect text="Actions">
            <Button modifiers={["plain", "full-width"]} style={buttonStyles}>
              Settings
            </Button>
            <Button modifiers={["plain", "full-width"]} style={buttonStyles}>
              Sign out
            </Button>
            <Button modifiers={["plain", "full-width"]} style={buttonStyles}>
              Help
            </Button>
          </ButtonSelect>
        </div>
      </Suspense>
    );
  });
