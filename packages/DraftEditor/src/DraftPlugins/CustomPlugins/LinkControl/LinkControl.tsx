import Input from "@blaze-react/input";
import Modal from "@blaze-react/modal";
import { ContentState, EditorState, SelectionState } from "draft-js";
import React, { useState } from "react";
import StyleButton from "../StyleButton";

import { IMMUTABLE, LINK } from "../../../constants";
import { ILinkControlProps } from "../../../interfaces";

const LinkControl = ({
  editorState,
  onToggle,
  unSelectedText
}: ILinkControlProps): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [selectedContent, setSelectedContent] = useState<SelectionState>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const getSelection = (): void => {
    const selection: SelectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();

    if (!selection.isCollapsed()) {
      const start: number = selection.getStartOffset();
      const end: number = selection.getEndOffset();

      if (start !== end) {
        const blockWithLinkAtBeginning = contentState.getBlockForKey(
          selection.getStartKey()
        );
        const linkKey = blockWithLinkAtBeginning.getEntityAt(
          selection.getStartOffset()
        );

        if (linkKey) {
          const linkInstance = contentState.getEntity(linkKey);
          const { url: oldUrl } = linkInstance.getData();

          setUrl(oldUrl);
          setIsEditMode(true);
        }

        setSelectedContent(selection);
      }
    }
  };

  const getUrl = (str: string) => {
    if (
      str.includes(".") &&
      !str.match(/^http[s]?:\/\//) &&
      !str.includes("mailto")
    ) {
      return `http://${str}`;
    }

    return str;
  };

  const addLink = (): void => {
    const contentState: ContentState = editorState.getCurrentContent();

    if (!selectedContent) {
      return;
    }

    let entityKey: string | null = null;
    let newEditorState: EditorState = editorState;

    if (url) {
      const formatedURL = getUrl(url);
      const contentStateWithEntity: ContentState = contentState.createEntity(
        LINK,
        IMMUTABLE,
        { url: formatedURL }
      );

      entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity
      });
    }

    onToggle(newEditorState, selectedContent, entityKey);
    closeModal();
  };

  const alertActions = [
    {
      callback: addLink,
      modifiers: ["small", `${selectedContent ? "" : "disabled"}`],
      textButton: "Save"
    }
  ];

  const openModal = (): void => {
    setModalStatus(true);
    getSelection();
  };

  const closeModal = (): void => {
    setUrl("");
    setSelectedContent(undefined);
    setIsEditMode(false);
    setModalStatus(false);
  };

  const handleChange = ({ value }: { value: string }): void => setUrl(value);

  return (
    <>
      <StyleButton
        label={<i className="material-icons">insert_link</i>}
        onToggle={openModal}
        active={modalStatus}
      />
      {modalStatus && (
        <Modal actions={alertActions} onClose={closeModal} isAlert>
          {selectedContent ? (
            <>
              <Input
                placeholder="Insert URL"
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
