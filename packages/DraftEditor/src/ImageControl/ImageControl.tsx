import FileUpload from "@blaze-react/file-upload";
import Modal from "@blaze-react/modal";
import { IImage, IInlineImageControlsProps } from "../interfaces";

import { ContentState, EditorState } from "draft-js";
import React, { FunctionComponent, useState } from "react";

import StyleButton from "../StyleButton";

const InlineControls: FunctionComponent<IInlineImageControlsProps> = ({
  editorState,
  previewImages: preUploadedImages,
  onToggle
}): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [previewImages, setPreviewImages] = useState<object[]>(
    preUploadedImages
  );
  const [selectedImages, setSelectedImages] = useState<object[]>([]);

  const insertImage = (src: string, latestEditorState: EditorState): any => {
    const contentState: ContentState = latestEditorState.getCurrentContent();
    const contentStateWithEntity: ContentState = contentState.createEntity(
      "image",
      "IMMUTABLE",
      { src }
    );
    const entityKey: string = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState: EditorState = EditorState.set(latestEditorState, {
      currentContent: contentStateWithEntity
    });

    return onToggle(newEditorState, entityKey);
  };

  const openModal = (): void => toggleModal();

  const toggleModal = (): void => {
    setModalStatus(!modalStatus);
    setSelectedImages(preUploadedImages);
    setPreviewImages([]);
  };

  const addSelectedImagesToEditor = (): void => {
    let latestEditorState = editorState;
    selectedImages.forEach((img: IImage) => {
      const { src } = img;
      latestEditorState = insertImage(src, latestEditorState);
    });
    toggleModal();
  };

  const alertActions: object[] = [
    {
      callback: addSelectedImagesToEditor,
      modifiers: ["rounded", "outline"],
      textButton: "Save"
    }
  ];

  const handleDrop = ({
    previewFiles,
    canceled
  }: {
    previewFiles: IImage[];
    canceled: boolean;
  }): void => {
    if (canceled) {
      return setPreviewImages([]);
    }
    setPreviewImages([...previewImages, ...formatImages(previewFiles)]);
  };

  const onCancel = (): void => setSelectedImages([]);

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

  const showAllImages = (): JSX.Element[] => {
    return previewImages.map((image: IImage) => {
      const { src, key } = image;
      console.log(key);
      return (
        <div
          className="custom-DraftEditor-previewImage"
          onClick={(): void => addSelectedImage(image)}
          key={key}
        >
          {isSelected(src) && (
            <span>
              <i className="material-icons">done</i>
            </span>
          )}
          <img src={src} />
        </div>
      );
    });
  };

  return (
    <>
      <StyleButton
        label={<i className="material-icons">add_photo_alternate</i>}
        onToggle={openModal}
      />
      {modalStatus && (
        <Modal title="Upload" actions={alertActions} onClose={toggleModal}>
          <FileUpload handleDrop={handleDrop} onCancel={onCancel} />
          <div className="custom-DraftEditor-images">{showAllImages()}</div>
        </Modal>
      )}
    </>
  );
};

export default InlineControls;
