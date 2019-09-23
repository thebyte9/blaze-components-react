import Input from "@blaze-react/input";
import Modal from "@blaze-react/modal";
import { ContentState, EditorState, SelectionState } from "draft-js";
import React, { useState } from "react";
import StyleButton from "../StyleButton";

interface ILinkControlProps {
  editorState: EditorState;
  unSelectedText: string;
  onToggle: (
    newEditorState: EditorState,
    selection: SelectionState,
    entityKey: string
  ) => void;
}
const LinkControl = ({
  editorState,
  unSelectedText,
  onToggle
}: ILinkControlProps): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [selectedContent, setSelectedContent] = useState<SelectionState>();

  const getSelection = () => {
    const selection: SelectionState = editorState.getSelection();

    const start: number = selection.getStartOffset();
    const end: number = selection.getEndOffset();
    if (start !== end) {
      setSelectedContent(selection);
    }
  };

  const openModal = (): void => {
    getSelection();
    toggleModal();
  };

  const addLink = () => {
    const contentState: ContentState = editorState.getCurrentContent();

    if (!selectedContent) {
      return;
    }

    const contentStateWithEntity: ContentState = contentState.createEntity(
      "LINK",
      "IMMUTABLE",
      { url }
    );
    const entityKey: string = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState: EditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });

    onToggle(newEditorState, selectedContent, entityKey);
    toggleModal();
  };

  const alertActions = [
    {
      callback: addLink,
      modifiers: ["small", "rounded", `${!!selectedContent ? "" : "disabled"}`],
      textButton: "Add link"
    }
  ];

  const toggleModal = (): void => setModalStatus(!modalStatus);

  const handleChange = ({ value }: { value: string }): void => setUrl(value);

  const hasSelection: boolean = !!selectedContent;

  return (
    <div className="custom-DraftEditor-controls">
      <StyleButton
        label={<i className="material-icons link">insert_link</i>}
        onToggle={openModal}
        active={modalStatus}
      />
      {modalStatus && (
        <Modal actions={alertActions} onClose={toggleModal} isAlert>
          {hasSelection ? (
            <Input
              placeholder="Past link"
              onChange={handleChange}
              modifier="full-width"
            />
          ) : (
            <p>{unSelectedText}</p>
          )}
        </Modal>
      )}
    </div>
  );
};

const Link = (props: any): JSX.Element => {
  const { url }: { url: string } = props.contentState
    .getEntity(props.entityKey)
    .getData();
  return (
    <a rel="nofollow noreferrer" href={url} target="_blank">
      {props.children}
    </a>
  );
};

LinkControl.Link = Link;

LinkControl.defaultProps = {
  error: false,
  name: "editor"
};

export default LinkControl;
