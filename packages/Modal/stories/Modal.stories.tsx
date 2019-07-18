import { storiesOf } from "@storybook/react";
import React from "react";
import ModalReadme from "../README.md";
import Modal from "../src";
const actions = [
  {
    callback: () => ({}),
    textButton: "Action 1"
  },
  {
    callback: () => ({}),
    textButton: "Action 2"
  }
];

const alertActions = [
  {
    callback: () => ({}),
    modifiers: "alert small",
    textButton: "delete"
  }
];
storiesOf("Modal", module)
  .addParameters({
    readme: {
      sidebar: ModalReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Modals</h1>

      <p>
        A modal dialog is a dialog that appears at the top of the main content.
        Use a modal for dialog boxes, forms, confirmation messages or other
        content that can be accessed.
      </p>

      <Modal
        isActive
        buttonText="Simple modal"
        title="Simple Modal"
        actions={actions}
        simple
      >
        <p>lorem ipsum dolor...</p>
      </Modal>
      <br />
      <br />

      <Modal
        actions={alertActions}
        buttonText="Alert modal"
        buttonModifiers="rounded alert"
        alert
      >
        <p>Delete item?</p>
      </Modal>
      <br />
      <br />

      <Modal
        title="Scrollable Modal"
        buttonText="Scrollable modal"
        buttonModifiers="outline dark rounded"
        actions={actions}
      >
        <p>
          Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below; Default modal with
          scrollable content:
        </p>
        <hr />
        <p>
          Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below; Default modal with
          scrollable content:
        </p>
        <ol>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
        </ol>
        <p>
          Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below; Default modal with
          scrollable content:
        </p>
        <hr />
        <p>
          Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below; Default modal with
          scrollable content:
        </p>
        <hr />
        <p>
          Content here that may need to be scrolled - can be text/forms/etc.
          Code for default modal, simple & alert below; Default modal with
          scrollable content:
        </p>
      </Modal>
    </div>
  ));
