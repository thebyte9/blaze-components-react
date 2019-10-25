import { storiesOf } from "@storybook/react";
import React, { Fragment, useState } from "react";
import ModalReadme from "../README.md";
import Modal from "../src";

const ModalDemo = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(true);

  const onClose = () => setModalStatus(false);

  const alertActions = [
    {
      callback: () => ({}),
      modifiers: ["small"],
      textButton: "delete"
    }
  ];

  return (
    <Fragment>
      {modalStatus && (
        <Modal
          title="Simple Modal"
          actions={alertActions}
          onClose={onClose}
          isAlert
        >
          <p>lorem ipsum dolor...</p>
        </Modal>
      )}
    </Fragment>
  );
};

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
    </div>
  ));
