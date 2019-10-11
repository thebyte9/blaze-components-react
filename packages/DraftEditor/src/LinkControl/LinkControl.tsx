import Input from "@blaze-react/input";
import Modal from "@blaze-react/modal";
import { ContentState, EditorState, SelectionState } from "draft-js";
import React, { useEffect, useState } from "react";
import eventBus from "../eventBus";
import StyleButton from "../StyleButton";

import { IMMUTABLE, LINK } from "../constants";
import { ILinkControlProps } from "../interfaces";

const LinkControl = ({
  editorState,
  onToggle,
  unSelectedText
}: ILinkControlProps): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<SelectionState>();

  useEffect(() => {
    eventBus.$on("edit-link", ({ url: oldUrl }: { url: string }) => {
      openModal();
      setUrl(oldUrl);
      setIsEditMode(true);
    });
  }, []);

  const getSelection = (): void => {
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

  const addLink = (): void => {
    const contentState: ContentState = editorState.getCurrentContent();

    if (!selectedContent) {
      return;
    }

    let entityKey: string | null = null;
    let newEditorState: EditorState = editorState;

    if (url) {
      const contentStateWithEntity: ContentState = contentState.createEntity(
        LINK,
        IMMUTABLE,
        { url }
      );
      entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity
      });
    }

    onToggle(newEditorState, selectedContent, entityKey);
    toggleModal();
    setUrl("");
    setIsEditMode(false);
  };

  const alertActions = [
    {
      callback: addLink,
      modifiers: [
        "small",
        "rounded",
        "outline",
        `${selectedContent ? "" : "disabled"}`
      ],
      textButton: "Save"
    }
  ];

  const toggleModal = (): void => {
    setModalStatus(!modalStatus);
    setUrl("");
  };

  const handleChange = ({ value }: { value: string }): void => setUrl(value);

  return (
    <>
      <StyleButton
        label={<i className="material-icons link">insert_link</i>}
        onToggle={openModal}
        active={modalStatus}
      />
      {modalStatus && (
        <Modal actions={alertActions} onClose={toggleModal} isAlert>
          {selectedContent ? (
            <>
              <Input
                placeholder="Past link"
                onChange={handleChange}
                modifier="full-width"
                value={url}
              />
              {isEditMode && (
                <span>Note: keep it empty if you want to remove the link.</span>
              )}
            </>
          ) : (
            <p>{unSelectedText}</p>
          )}
        </Modal>
      )}
    </>
  );
};

LinkControl.defaultProps = {
  error: false,
  name: "editor"
};

export default LinkControl;
