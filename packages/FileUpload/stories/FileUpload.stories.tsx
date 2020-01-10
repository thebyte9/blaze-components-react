import "@blaze-react/blaze-components-theme";
import Modal from "@blaze-react/modal";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import FileUploadReadme from "../README.md";

storiesOf("FileUpload", module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme
    }
  })
  .add("Introduction", (): any => {
    const FileUploadModal = ({ onClose }: any) => {
      const onChange = (event: any[], currentFiles: any[]) => {
        // tslint:disable-next-line: no-console

        console.log("currentfiles -->", currentFiles);
      };

      const FileUpload: any = lazy(() => import("../src"));
      return (
        <Suspense fallback={<div>Loading...</div>}>
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
            <FileUpload onChange={onChange} />
          </Modal>
        </Suspense>
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
