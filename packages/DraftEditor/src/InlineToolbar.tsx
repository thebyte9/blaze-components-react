// @ts-nocheck
import { AtomicBlockUtils, RichUtils } from "draft-js";
import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  generateToolbar,
  getCurrentBlockTypeLabel,
  getInlineToolbarLeftPosition,
  getInlineToolbarTopPosition,
  ACTION_TYPE,
  ENTITY,
  generateActions,
  Rect,
} from "./inline-toolbar-utils";

const InlineToolbar = ({
  editorState,
  // setEditorState,
  selectionRect,
  showAddLinkModal,
  visible,
  onChange,
}) => {
  const rect = Rect.rect;
  const [isAlignmentDropdownOpen, setAlignmentDropdownOpen] = useState(false);
  const [isFormatDropdownOpen, setFormatDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const openClassName = "editor-view__inlinetoolbar--columns--open";
  const closedClassName = "editor-view__inlinetoolbar--columns--closed";
  const alignment = isAlignmentDropdownOpen ? openClassName : closedClassName;
  const format = isFormatDropdownOpen ? openClassName : closedClassName;
  const more = isMoreDropdownOpen ? openClassName : closedClassName;

  const actions = generateActions(
    alignment,
    isAlignmentDropdownOpen,
    setAlignmentDropdownOpen
  );

  const handleAction = ({ action }) => {
    if (action.type === ACTION_TYPE.MODAL) {
      showAddLinkModal(true);
    } else {
      showAddLinkModal(false);
    }

    if (action.type === ACTION_TYPE.ATOMIC) {
      const contentState = editorState.getCurrentContent();

      const contentStateWithEntity = contentState.createEntity(
        ENTITY.HORIZONTAL_RULE.type,
        ENTITY.HORIZONTAL_RULE.mutability,
        {}
      );

      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      const newState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        " "
      );

      onChange(newState);
    }

    if (action.type === ACTION_TYPE.INLINE) {
      const newState = RichUtils.toggleInlineStyle(editorState, action.style);

      onChange(newState);
    }

    if (action.type === ACTION_TYPE.BLOCK) {
      const newState = RichUtils.toggleBlockType(editorState, action.style);

      onChange(newState);
    }
  };

  // const handleAction = ({ action }) => {
  //   if (action.type === ACTION_TYPE.MODAL) {
  //     showAddLinkModal(true);
  //   } else {
  //     showAddLinkModal(false);
  //   }

  //   if (action.type === ACTION_TYPE.ATOMIC) {
  //     const contentState = editorState.getCurrentContent();

  //     const contentStateWithEntity = contentState.createEntity(
  //       ENTITY.HORIZONTAL_RULE.type,
  //       ENTITY.HORIZONTAL_RULE.mutability,
  //       {}
  //     );

  //     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  //     const newState = AtomicBlockUtils.insertAtomicBlock(
  //       editorState,
  //       entityKey,
  //       " "
  //     );

  //     setEditorState(newState);
  //   }

  //   if (action.type === ACTION_TYPE.INLINE) {
  //     const newState = RichUtils.toggleInlineStyle(editorState, action.style);
  //     setEditorState(newState);
  //     onChange(newState);
  //   }

  //   if (action.type === ACTION_TYPE.BLOCK) {
  //     const newState = RichUtils.toggleBlockType(editorState, action.style);
  //     setEditorState(newState);
  //     onChange(newState);
  //   }
  // };

  return (
    <div
      className={
        visible
          ? "editor-view__inlinetoolbar"
          : "editor-view__inlinetoolbar editor-view__hidden"
      }
      style={{
        position: "sticky",
        display: "inline-block",
        top: getInlineToolbarTopPosition(selectionRect),
        left: getInlineToolbarLeftPosition(rect, selectionRect),
      }}
    >
      <div className="editor-view__inlinetoolbar--items">
        <div className="row">
          {generateToolbar(actions, editorState, handleAction)}
        </div>
        <div
          className={format}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setFormatDropdownOpen(!isFormatDropdownOpen);
          }}
          role="button"
        >
          <span>{getCurrentBlockTypeLabel(editorState)}</span>
          {isFormatDropdownOpen && (
            <div className="editor-view__inlinetoolbar--submenu">
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
              >
                <div
                  className="editor-view__inlinetoolbar--submenu--text"
                  role="button"
                  onMouseDown={(e) =>
                    handleAction({
                      e,
                      action: { type: ACTION_TYPE.BLOCK, style: "unstyled" },
                    })
                  }
                >
                  Paragraph
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
              >
                <div
                  className="editor-view__inlinetoolbar--submenu--text"
                  role="button"
                  onMouseDown={(e) =>
                    handleAction({
                      e,
                      action: { type: ACTION_TYPE.BLOCK, style: "header-one" },
                    })
                  }
                >
                  Heading 1
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.BLOCK, style: "header-two" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Heading 2
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.BLOCK, style: "header-three" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Heading 3
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.BLOCK, style: "header-four" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Heading 4
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.BLOCK, style: "header-five" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Heading 5
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.BLOCK, style: "header-six" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Heading 6
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={more}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMoreDropdownOpen(!isMoreDropdownOpen);
          }}
          role="button"
        >
          <div className="editor-view__inlinetoolbar--more">
            <span>
              <i className="fas fa-ellipsis-h" />
            </span>
          </div>
          {isMoreDropdownOpen && (
            <div className="editor-view__inlinetoolbar--submenu">
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.INLINE, style: "CODE" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Monospace
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: {
                      type: ACTION_TYPE.INLINE,
                      style: "STRIKETHROUGH",
                    },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  Strikethrough
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={(e) =>
                  handleAction({
                    e,
                    action: { type: ACTION_TYPE.ATOMIC, style: "HR" },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">
                  HR
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

InlineToolbar.propTypes = {
  editorState: PropTypes.object.isRequired,
  selectionRect: PropTypes.object.isRequired,
  showAddLinkModal: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default InlineToolbar;
