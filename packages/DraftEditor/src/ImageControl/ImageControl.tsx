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
  previewImages: preUploadedImages,
  onToggle,
  onFilesChange,
  handleOnSaveFiles
}): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [previewImages, setPreviewImages] = useState<IImage[]>(
    preUploadedImages
  );
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
    setSelectedImages(preUploadedImages);
    setPreviewImages([]);
  };

  const addSelectedImagesToEditor = (): void => {
    let latestEditorState: EditorState = editorState;
    selectedImages.forEach((img: IImage) => {
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
    setPreviewImages(formatImages(previewFiles));

  const formatImages = (images: IImage[]): IImage[] =>
    images.map((image: IImage) => ({
      ...image,
      src: image.src || image.base64
    }));

  const addSelectedImage = (image: IImage): void => {
    const { src } = image;
    if (isSelected(src)) {
      return setSelectedImages(
        selectedImages.filter((img: IImage) => src !== img.src)
      );
    }
    setSelectedImages([...selectedImages, image]);
  };

  const isSelected = (src: string): boolean => {
    return !!selectedImages.find((image: IImage) => image.src === src);
  };

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
            customPreview
          />
          <PreviewImages
            previewImages={previewImages}
            isSelected={isSelected}
            addSelectedImage={addSelectedImage}
          />
        </Modal>
      )}
    </>
  );
};

export default InlineControls;
