import FileUpload from "@blaze-react/file-upload";
import Modal from "@blaze-react/modal";
import { IImage, IInlineImageControlsProps } from "../interfaces";

import { ContentState, EditorState } from "draft-js";
import React, { FunctionComponent, useState } from "react";

import { IMAGE, IMMUTABLE } from "../constants";
import StyleButton from "../StyleButton";
import PreviewImages from "./PreviewImages";

const InlineControls: FunctionComponent<IInlineImageControlsProps> = ({
  editorState,
  previewImages,
  onToggle,
  onFilesChange,
  handleOnSaveFiles,
  handleLibraryClick
}): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const [selectedImages, setSelectedImages] = useState<IImage[]>([]);

  const insertImage = (
    src: string,
    latestEditorState: EditorState
  ): EditorState => {
    const contentState: ContentState = latestEditorState.getCurrentContent();
    const contentStateWithEntity: ContentState = contentState.createEntity(
      IMAGE,
      IMMUTABLE,
      { src }
    );
    const entityKey: string = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState: EditorState = EditorState.set(latestEditorState, {
      currentContent: contentStateWithEntity
    });

    return onToggle(newEditorState, entityKey);
  };

  const openModal = (): void => setModalStatus(true);

  const toggleModal = (): void => {
    setModalStatus(!modalStatus);
    setSelectedImages([]);
  };

  const addSelectedImagesToEditor = (): void => {
    let latestEditorState: EditorState = editorState;
    previewImages.concat(selectedImages).forEach((img: IImage) => {
      const { src } = img;
      latestEditorState = insertImage(src, latestEditorState);
    });
    handleOnSaveFiles();
    toggleModal();
  };

  const alertActions: object[] = [
    {
      callback: addSelectedImagesToEditor,
      modifiers: ["rounded", "outline"],
      textButton: "Save"
    }
  ];

  const handleDrop = ({ previewFiles }: { previewFiles: IImage[] }): void =>
    setSelectedImages(formatImages(previewFiles));

  const formatImages = (images: IImage[]): IImage[] =>
    images.map((image: IImage) => ({
      ...image,
      src: image.src || image.base64
    }));

  return (
    <>
      <StyleButton
        label={<i className="material-icons">add_photo_alternate</i>}
        onToggle={openModal}
      />
      {modalStatus && (
        <Modal title="Upload" actions={alertActions} onClose={toggleModal}>
          <FileUpload
            handleDrop={handleDrop}
            onChange={onFilesChange}
            handleLibraryClick={handleLibraryClick}
          />
          <PreviewImages previewImages={previewImages} />
        </Modal>
      )}
    </>
  );
};

export default InlineControls;
