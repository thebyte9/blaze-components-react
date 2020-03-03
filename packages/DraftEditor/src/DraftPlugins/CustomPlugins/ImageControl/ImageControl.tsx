import { ContentState, EditorState } from "draft-js";
import React, { FunctionComponent, useEffect } from "react";
import { IMAGE, IMMUTABLE } from "../../../constants";
import { IImage, IInlineImageControlsProps } from "../../../interfaces";
import StyleButton from "../StyleButton";

const ImageControl: FunctionComponent<IInlineImageControlsProps> = ({
  editorState,
  selectedImages,
  onToggle,
  handleLibraryClick
}): JSX.Element => {
  useEffect(() => {
    let latestEditorState: EditorState = editorState;
    selectedImages.forEach((img: IImage) => {
      const { src } = img;
      latestEditorState = insertImage(src, latestEditorState);
    });
  }, [selectedImages]);

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

  return (
    <StyleButton
      label={<i className="material-icons">add_photo_alternate</i>}
      onToggle={handleLibraryClick}
      data-cy='styleButton-imageControl'
    />
  );
};

export default ImageControl;
