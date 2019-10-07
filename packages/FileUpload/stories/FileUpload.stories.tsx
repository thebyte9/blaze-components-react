import Modal from "@blaze-react/modal";
import { storiesOf } from "@storybook/react";
import React from "react";
import FileUploadReadme from "../README.md";
import FileUpload from "../src";

storiesOf("FileUpload", module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme
    }
  })
  .add("Introduction", () => {
    const FileUploadModal = ({ onClose }: any) => {
      return (
        <>
          <Modal
            title="Add media"
            actions={[
              {
                modifiers: ["cancel"],
                textButton: "Cancel"
              },
              {
                modifiers: [],
                textButton: "Save"
              }
            ]}
            upload
          >
            <FileUpload></FileUpload>
          </Modal>
        </>
      );
    };
    return (
      <div className="component-wrapper">
        <h1>FileUpload</h1>
        <p>
          {
            "FileUpload component is a great draggable area, move one or multiple images to a desired location and 'drop' it there using a mouse or similar device."
          }
        </p>

        <FileUploadModal onClose={() => {}} />
      </div>
    );
  });
