import Modal from "@blaze-react/modal";
import { storiesOf } from "@storybook/react";
import React, { Component } from "react";
import FileUploadReadme from "../README.md";
import FileUpload from "../src";

storiesOf("FileUpload", module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme
    }
  })
  .add("Introduction", () => {
    class ModalWithFileUpload extends Component {
      public state = {
        filesToUpload: [],
        previewImages: []
      };
      public handleDrop = ({
        previewFiles,
        canceled,
        files
      }: {
        previewFiles: object[];
        canceled: boolean;
        files: any[];
      }) => {
        const { previewImages, filesToUpload } = this.state;
        if (canceled) {
          return this.setState({ previewImages: [] });
        }
        const images = previewFiles.map(
          ({ base64, name }: { base64: string; name: string }) => (
            <img key={name} src={base64} alt="alt text" />
          )
        );
        this.setState({
          filesToUpload: [...filesToUpload, ...files],
          previewImages: [...previewImages, ...images]
        });
      };
      public render() {
        const {
          state: { previewImages },
          handleDrop
        } = this;
        return (
          <Modal
            isActive
            buttonText="Upload Files"
            title="Add media"
            actions={[["submit", () => {}, "rounded outline"]]}
            upload
          >
            <FileUpload handleDrop={handleDrop}>
              <div>{previewImages}</div>
            </FileUpload>
          </Modal>
        );
      }
    }
    return (
      <div className="component-wrapper">
        <h1>FileUpload</h1>
        <p>
          {
            "FileUpload component is a great draggable area, move one or multiple images to a desired location and 'drop' it there using a mouse or similar device."
          }
        </p>

        <ModalWithFileUpload />
      </div>
    );
  });
