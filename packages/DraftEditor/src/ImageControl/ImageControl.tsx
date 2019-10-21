import FileUpload from "@blaze-react/file-upload";
import Modal from "@blaze-react/modal";
import { IImage, IInlineImageControlsProps } from "../interfaces";

import { ContentState, EditorState } from "draft-js";
import React, { FunctionComponent, useEffect, useState } from "react";

import { IMAGE, IMMUTABLE } from "../constants";
import StyleButton from "../StyleButton";
import PreviewImages from "./PreviewImages";

const InlineControls: FunctionComponent<IInlineImageControlsProps> = ({
  editorState,
  previewImages,
  onToggle,
  onFilesChange,
  handleOnSaveFiles,
  handleLibraryClick,
  uploadedFile
}): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  useEffect(() => {
    let latestEditorState: EditorState = editorState;
    const { url }: { url: string } = uploadedFile;
    latestEditorState = insertImage(url, latestEditorState);
  }, [uploadedFile]);

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
  };

  const addSelectedImagesToEditor = (): void => {
    let latestEditorState: EditorState = editorState;
    previewImages.forEach((img: IImage) => {
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

  return (
    <>
      <StyleButton
        label={<i className="material-icons">add_photo_alternate</i>}
        onToggle={openModal}
      />
      {modalStatus && (
        <Modal title="Upload" actions={alertActions} onClose={toggleModal}>
          <FileUpload
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
