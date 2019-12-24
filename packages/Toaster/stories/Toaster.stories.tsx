import Button from "@blaze-react/button";
import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import ToasterReadme from "../README.md";
import { ToastProvider, useToasts } from "../src";

function Toasts() {
  const { addToast } = useToasts();

  const add = (param: string) =>
    addToast(`The current toasters is of type:${param}`, {
      appearance: param,
      autoDismiss: true
    });

  return (
    <div
      style={{
        bottom: "0",
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%"
      }}
    >
      <Button onClick={() => add("success")}>Success</Button>
      <Button onClick={() => add("error")}>Error</Button>
      <Button onClick={() => add("warning")}>Warning</Button>
      <Button onClick={() => add("info")}>Info</Button>
    </div>
  );
}

storiesOf("Toaster", module)
  .addParameters({
    readme: {
      sidebar: ToasterReadme
    }
  })
  .add("Introduction", () => {
    return (
      <ToastProvider>
        <Toasts />
      </ToastProvider>
    );
  });
