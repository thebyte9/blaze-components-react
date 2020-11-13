// @ts-nocheck
import { AtomicBlockUtils, RichUtils } from "draft-js";
import PropTypes from "prop-types";
import React, { useState } from "react";

const InlineToolbar = ({
  editorState,
  setEditorState,
  selectionRect,
  showAddLinkModal,
}) => {
  const [isAlignmentDropdownOpen, setAlignmentDropdownOpen] = useState(false);
  const [isFormatDropdownOpen, setFormatDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const openClassName = "editor-view__inlinetoolbar--columns--open";
  const closedClassName = "editor-view__inlinetoolbar--columns--closed";
  const alignment = isAlignmentDropdownOpen ? openClassName : closedClassName;
  const format = isFormatDropdownOpen ? openClassName : closedClassName;
  const more = isMoreDropdownOpen ? openClassName : closedClassName;

  const rect = { x: 0 };

  const ACTION_TYPE = {
    INLINE: "inline",
    BLOCK: "block",
    ATOMIC: "atomic",
    MODAL: "modal",
  };

  const INLINE_ACTIONS = [
    {
      label: "Bold",
      style: "BOLD",
      icon: "fas fa-bold",
      type: ACTION_TYPE.INLINE,
    },
    {
      label: "Italic",
      style: "ITALIC",
      icon: "fas fa-italic",
      type: ACTION_TYPE.INLINE,
    },
    { label: "Link", icon: "fas fa-link", type: ACTION_TYPE.MODAL },
    {
      label: "Blockquote",
      style: "blockquote",
      icon: "fas fa-quote-right",
      type: ACTION_TYPE.BLOCK,
    },
    {
      label: "Unordered list",
      style: "unordered-list-item",
      icon: "fas fa-list-ul",
      type: ACTION_TYPE.BLOCK,
    },
    {
      label: "Ordered list",
      style: "ordered-list-item",
      icon: "fas fa-list-ol",
      type: ACTION_TYPE.BLOCK,
    },
    {
      label: "Align left",
      icon: "fas fa-align-left",
      style: "left",
      cssClass: alignment,
      stateVariable: isAlignmentDropdownOpen,
      stateFn: setAlignmentDropdownOpen,
      type: ACTION_TYPE.BLOCK,

      actions: [
        {
          label: "Align center",
          style: "center",
          icon: "fas fa-align-center",
          type: ACTION_TYPE.BLOCK,
        },
        {
          label: "Align right",
          style: "right",
          icon: "fas fa-align-right",
          type: ACTION_TYPE.BLOCK,
        },
      ],
    },
  ];

  const ENTITY = {
    HORIZONTAL_RULE: {
      type: "HORIZONTAL_RULE",
      mutability: "IMMUTABLE",
      data: {},
    },
  };

  const handleAction = ({ event, action }) => {
    if (!action) {
      return;
    }

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

      setEditorState(newState);
    }

    if (action.type === ACTION_TYPE.INLINE) {
      const newState = RichUtils.toggleInlineStyle(editorState, action.style);
      setEditorState(newState);
    }

    if (action.type === ACTION_TYPE.BLOCK) {
      const newState = RichUtils.toggleBlockType(editorState, action.style);
      setEditorState(newState);
    }
  };

  const generateToolbarActions = (root) =>
    root.actions.map((action) => (
      <div
        className="editor-view__inlinetoolbar--submenu__actions--item"
        role="button"
        alt={action.label}
        aria-label={action.label}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleAction({ e, action });
        }}
      >
        <i className={action.icon} />
      </div>
    ));

  const generateToolbar = () =>
    INLINE_ACTIONS.map((action) => {
      if (action.actions) {
        return (
          <div
            className={action.cssClass}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              action.stateFn(!action.stateVariable);
            }}
            role="button"
          >
            <div className="editor-view__inlinetoolbar--more">
              <span>
                <i className={action.icon} />
              </span>
            </div>
            {action.stateVariable && (
              <div className="editor-view__inlinetoolbar--submenu__actions">
                {generateToolbarActions(action)}
              </div>
            )}
          </div>
        );
      }

      return (
        <div
          className="editor-view__inlinetoolbar--item"
          role="button"
          alt={action.label}
          aria-label={action.label}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleAction({ action });
          }}
        >
          <i className={action.icon} />
        </div>
      );
    });

  const getLeftPosition = () => {
    const toolbarSize = 500;

    const { right, left } = selectionRect;

    if (left === rect.x) {
      return left - 30;
    }

    if (left <= rect.x) {
      return rect.x;
    }

    if (right - toolbarSize <= rect.x) {
      return rect.x - 30;
    }

    return right - toolbarSize;
  };

  return (
    <div
      className="editor-view__inlinetoolbar"
      style={{
        position: "absolute",
        top: selectionRect.top + 20,
        left: getLeftPosition(),
      }}
    >
      <div className="editor-view__inlinetoolbar--items">
        <div className="row">{generateToolbar()}</div>
        <div
          className={format}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setFormatDropdownOpen(!isFormatDropdownOpen);
          }}
          role="button"
        >
          <span>Paragraph</span>
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
  setEditorState: PropTypes.func.isRequired,
  showAddLinkModal: PropTypes.func.isRequired,
};

export default InlineToolbar;
