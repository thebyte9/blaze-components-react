/* eslint-disable no-undef */
// @ts-nocheck
import React from "react";
import { RichUtils } from "draft-js";

const generateActions = (
  alignment,
  isAlignmentDropdownOpen,
  setAlignmentDropdownOpen
) => [
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
        label: "Align left",
        style: "left",
        icon: "fas fa-align-left",
        type: ACTION_TYPE.BLOCK,
      },
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

const getClassnames = (action, editorState) => {
  const currentInlineStyle = editorState.getCurrentInlineStyle();

  // inline style
  if (currentInlineStyle.size > 0 && currentInlineStyle.has(action.style)) {
    return "editor-view__inlinetoolbar--item editor-view__inlinetoolbar--item__active";
  }

  // block style
  const currentBlockType = RichUtils.getCurrentBlockType(editorState);
  if (currentBlockType === action.style) {
    return "editor-view__inlinetoolbar--item editor-view__inlinetoolbar--item__active";
  }

  return "editor-view__inlinetoolbar--item";
};

const generateToolbar = (actions, editorState, handleAction) =>
  actions.map((action, index) => {
    if (action.actions) {
      const currentBlockType = RichUtils.getCurrentBlockType(editorState);
      const currentBlockAction = getCurrentBlockAction(
        action,
        currentBlockType
      );

      return (
        <div
          key={[action, index].join("-")}
          className={action.cssClass}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            action.stateFn(!action.stateVariable);
          }}
          role="button"
        >
          <div
            className="editor-view__inlinetoolbar--more"
            key={[action, index, currentBlockAction].join("-")}
          >
            <span>
              {currentBlockAction && <i className={currentBlockAction.icon} />}
            </span>
          </div>
          {action.stateVariable && (
            <div className="editor-view__inlinetoolbar--submenu__actions">
              {generateToolbarActions(action, handleAction, editorState)}
            </div>
          )}
        </div>
      );
    }

    const className = getClassnames(action, editorState);

    return (
      <div
        className={className}
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

const generateToolbarActions = (root, handleAction, editorState) =>
  root.actions.map((action, index) => {
    const className = getClassnames(action, editorState);

    return (
      <div
        key={[action.label, index].join("-")}
        className={className}
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
    );
  });

const ACTION_TYPE = {
  INLINE: "inline",
  BLOCK: "block",
  ATOMIC: "atomic",
  MODAL: "modal",
};

const ENTITY = {
  HORIZONTAL_RULE: {
    type: "HORIZONTAL_RULE",
    mutability: "IMMUTABLE",
    data: {},
  },
};

const getCurrentBlockAction = (action, currentBlockStyle) => {
  if (
    currentBlockStyle === "unstyled" ||
    currentBlockStyle.includes("header") ||
    currentBlockStyle.includes("blockquote") ||
    currentBlockStyle.includes("unordered-list-item") ||
    currentBlockStyle.includes("ordered-list-item")
  ) {
    return action.actions[0];
  }
  const result = action.actions.filter(
    (item) => item.style === currentBlockStyle
  );
  return result[0];
};

const getCurrentBlockTypeLabel = (editorState) => {
  const currentBlockType = RichUtils.getCurrentBlockType(editorState);

  switch (currentBlockType) {
    case "unstyled":
      return "Paragraph";
    case "header-one":
      return "Heading 1";
    case "header-two":
      return "Heading 2";
    case "header-three":
      return "Heading 3";
    case "header-four":
      return "Heading 4";
    case "header-five":
      return "Heading 5";
    case "header-six":
      return "Heading 6";
    default:
      return "Paragraph";
  }
};

const getInlineToolbarLeftPosition = (rect, selectionRect) => {
  const toolbarSize = 500;
  const padding = 60;

  const { left, right } = selectionRect;

  if (toolbarSize > rect.width) {
    return -(padding / 2);
  }

  // left
  if (left === rect.x) {
    return left - rect.x;
  }

  if (left < toolbarSize) {
    return left - rect.x;
  }

  // right
  if (right > rect.width) {
    return rect.width - toolbarSize - padding / 2;
  }

  return left - toolbarSize;
};

const getInlineToolbarTopPosition = (selectionRect) => {
  const inlineToolbarHeight = 300;

  return selectionRect.top - inlineToolbarHeight;
};

function RectObject() {
  this.rect = {
    x: 0,
    y: 0,
    width: 0,
  };
}

const Rect = new RectObject();

export {
  generateActions,
  getInlineToolbarLeftPosition,
  getInlineToolbarTopPosition,
  getClassnames,
  generateToolbar,
  generateToolbarActions,
  getCurrentBlockAction,
  getCurrentBlockTypeLabel,
  ACTION_TYPE,
  ENTITY,
  Rect,
};
