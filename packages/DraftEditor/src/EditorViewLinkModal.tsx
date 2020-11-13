// @ts-nocheck

import Input from "@blaze-react/input";
import Modal from "@blaze-react/modal";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const EditorViewLinkModal = ({
  editorState,
  onClose,
  onSave,
  linkContentState,
}) => {
  const [url, setUrl] = useState("");
  const [componentState, setComponentState] = useState(linkContentState);

  const handleOnChange = ({ value }) => setUrl(value);

  useEffect(() => {
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    const selectedText = currentContentBlock.getText().slice(start, end);

    if (!selection.isCollapsed() && selectedText !== "") {
      if (start !== end) {
        const blockWithLinkAtBeginning = currentContent.getBlockForKey(
          selection.getStartKey()
        );

        const linkKey = blockWithLinkAtBeginning.getEntityAt(
          selection.getStartOffset()
        );

        if (linkKey) {
          const linkInstance = currentContent.getEntity(linkKey);
          const { url: currentUrl } = linkInstance.getData();

          setUrl(currentUrl);
        }
      }
    }

    if (linkContentState) {
      const { contentState, entityKey } = linkContentState;
      const linkInstance = contentState.getEntity(entityKey);
      const { url: currentUrl } = linkInstance.getData();
      setUrl(currentUrl);
      setComponentState(linkContentState);
    }
  }, [editorState, linkContentState]);

  return (
    <Modal
      isAlert
      onClose={() => {
        onClose();
      }}
      actions={[
        {
          textButton: "Save",
          callback: () => {
            onSave(url, componentState);
          },
          modifiers: ["small"],
        },
      ]}
    >
      <Input
        label="Insert URL"
        placeholder="Insert URL"
        modifier="full-width"
        onChange={handleOnChange}
        value={url}
        autoFocus
      />
    </Modal>
  );
};

EditorViewLinkModal.propTypes = {
  editorState: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  linkContentState: PropTypes.object,
};

EditorViewLinkModal.defaultProps = {
  linkContentState: null,
};

export default EditorViewLinkModal;
