import { storiesOf } from "@storybook/react";
import React, { Fragment, useState } from "react";
import ModalReadme from "../README.md";
import Modal from "../src";

const ModalDemo = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(true);

  const onClose = () => setModalStatus(false);

  return (
    <Fragment>
      {modalStatus && (
        <Modal title="Simple Modal" actions={actions} onClose={onClose}>
          <p>lorem ipsum dolor...</p>
        </Modal>
      )}
    </Fragment>
  );
};

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

// const alertActions = [
//   {
//     callback: () => ({}),
//     modifiers: ["alert", "small"],
//     textButton: "delete"
//   }
// ];
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

      <ModalDemo />

      {/* <Modal isActive title="Simple Modal" actions={actions} simple>
        <p>lorem ipsum dolor...</p>
      </Modal> */}
      <br />
      <br />
      {/* 
      <Modal
        actions={alertActions}
        buttonModifiers={["rounded", "alert"]}
        alert
      >
        <p>Delete item?</p>
      </Modal> */}
      <br />
      <br />
      {/* 
      <Modal
        title="Scrollable Modal"
        buttonModifiers={["outline", "dark", "rounded"]}
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
      </Modal> */}
    </div>
  ));
