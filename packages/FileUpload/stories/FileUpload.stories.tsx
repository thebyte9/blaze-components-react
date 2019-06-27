import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import uuidv1 from "uuid/v1";
import Modal from "@blaze-react/modal";
import FileUpload from "../src";
import FileUploadReadme from "../README.md";

storiesOf("FileUpload", module)
  .addParameters({
    readme: {
      sidebar: FileUploadReadme
    }
  })
  .add("Introduction", () => {
    class ModalWithFileUpload extends Component {
      state = {
        previewImages: [],
        filesToUpload: []
      };
      handleDrop = ({ base64, canceled, files }: { base64: string[], canceled: boolean, files: any[] }) => {
        const { previewImages, filesToUpload } = this.state;
        if (canceled) return this.setState({ previewImages: [] });
        const images = base64.map(src => (
          <img key={uuidv1()} src={src} alt="alt text" />
        ));
        this.setState({
          previewImages: [...previewImages, ...images],
          filesToUpload: [...filesToUpload, ...files]
        });
      };
      render() {
        const {
          state: { previewImages },
          handleDrop
        } = this;
        return (
          <Modal
            isActive
            buttonText="Upload Files"
            title="Add media"
            actions={[["submit", () => { }, "rounded outline"]]}
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
