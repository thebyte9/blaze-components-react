import {
  ACTION_TYPE,
  ENTITY,
  generateActions,
  generateToolbar,
  getCurrentBlockTypeLabel,
  getDropdownClassnames,
  getInlineToolbarLeftPosition,
  getInlineToolbarTopPosition,
} from './helpers';
import { AtomicBlockUtils, EditorState, RichUtils } from 'draft-js';
import { IInlineToolbarAction, ISelectionRect } from './helpers/inline-toolbar';
/* eslint-disable no-undef */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { usePersistedState } from './hooks/usePersistedState';

interface IInlineToolbarProps {
  editorState: EditorState;
  selectionRect: ISelectionRect;
  showAddLinkModal: (value: boolean) => void;
  onChange: (state: EditorState) => void;
  visible: boolean;
  dispatch?: any;
}

const InlineToolbar = ({ editorState, selectionRect, showAddLinkModal, onChange, visible }: IInlineToolbarProps) => {
  const [isAlignmentDropdownOpen, setAlignmentDropdownOpen] = useState(false);
  const [isFormatDropdownOpen, setFormatDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const { alignment, format, more } = getDropdownClassnames({
    isAlignmentDropdownOpen,
    isFormatDropdownOpen,
    isMoreDropdownOpen,
  });

  const [rect, setRect] = usePersistedState('rect', {
    rect: {
      x: 0,
      y: 0,
      width: 0,
    },
  });

  if (!editorState) return null;

  const actions = generateActions({ alignment, isAlignmentDropdownOpen, setAlignmentDropdownOpen });

  const handleAction = (action: IInlineToolbarAction) => {
    if (action.type === ACTION_TYPE.MODAL) {
      showAddLinkModal(true);
    } else {
      showAddLinkModal(false);
    }

    if (action.type === ACTION_TYPE.ATOMIC) {
      const contentState = editorState.getCurrentContent();

      const contentStateWithEntity = contentState.createEntity(ENTITY.HORIZONTAL_RULE.type, 'IMMUTABLE', {});

      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      const newState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

      onChange(newState);
    }

    if (action.type === ACTION_TYPE.INLINE) {
      const newState = RichUtils.toggleInlineStyle(editorState, action.style!);

      onChange(newState);
    }

    if (action.type === ACTION_TYPE.BLOCK) {
      const newState = RichUtils.toggleBlockType(editorState, action.style!);

      onChange(newState);
    }
  };

  let currentBlockTypeLabel = null;

  try {
    currentBlockTypeLabel = getCurrentBlockTypeLabel(editorState);
  } catch (error) {
    currentBlockTypeLabel = null;
  }

  return (
    <div
      className={visible ? 'editor-view__inlinetoolbar' : 'editor-view__inlinetoolbar editor-view__hidden'}
      style={{
        position: 'sticky',
        display: 'inline-block',
        top: getInlineToolbarTopPosition(selectionRect) || 0,
        left: getInlineToolbarLeftPosition(rect, selectionRect) || 0,
      }}
    >
      <div className="editor-view__inlinetoolbar--items">
        <div className="row">{generateToolbar({ actions, editorState, handleAction })}</div>
        <div
          className={format}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setFormatDropdownOpen(!isFormatDropdownOpen);
          }}
          role="button"
        >
          <span>{currentBlockTypeLabel}</span>
          {isFormatDropdownOpen && (
            <div className="editor-view__inlinetoolbar--submenu">
              <div className="editor-view__inlinetoolbar--submenu--item" role="button">
                <div
                  className="editor-view__inlinetoolbar--submenu--text"
                  role="button"
                  onMouseDown={() =>
                    handleAction({
                      action: { type: ACTION_TYPE.BLOCK, style: 'unstyled' },
                    })
                  }
                >
                  Paragraph
                </div>
              </div>
              <div className="editor-view__inlinetoolbar--submenu--item" role="button">
                <div
                  className="editor-view__inlinetoolbar--submenu--text"
                  role="button"
                  onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.BLOCK, style: 'header-one' } })}
                >
                  Heading 1
                </div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.BLOCK, style: 'header-two' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Heading 2</div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.BLOCK, style: 'header-three' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Heading 3</div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.BLOCK, style: 'header-four' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Heading 4</div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.BLOCK, style: 'header-five' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Heading 5</div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.BLOCK, style: 'header-six' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Heading 6</div>
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
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.INLINE, style: 'CODE' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Monospace</div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() =>
                  handleAction({
                    action: { type: ACTION_TYPE.INLINE, style: 'STRIKETHROUGH' },
                  })
                }
              >
                <div className="editor-view__inlinetoolbar--submenu--text">Strikethrough</div>
              </div>
              <div
                className="editor-view__inlinetoolbar--submenu--item"
                role="button"
                onMouseDown={() => handleAction({ action: { type: ACTION_TYPE.ATOMIC, style: 'HR' } })}
              >
                <div className="editor-view__inlinetoolbar--submenu--text">HR</div>
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
