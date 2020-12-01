import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { Fragment, lazy, Suspense, useState } from "react";
import ModalReadme from "../README.md";

const ModalDemo = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(true);

  const onClose = () => setModalStatus(false);

  const alertActions = [
    {
      callback: () => ({}),
      modifiers: ["small"],
      textButton: "delete",
    },
  ];

  const Modal: any = lazy((): any => import("../src"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        {modalStatus && (
          <Modal
            title="Simple Modal"
            actions={alertActions}
            onClose={onClose}
            overlay={false}
          >
            <p>lorem ipsum dolor...</p>
          </Modal>
        )}
      </Fragment>
    </Suspense>
  );
};

storiesOf("Modal", module)
  .addParameters({
    readme: {
      sidebar: ModalReadme,
    },
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
