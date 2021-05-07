import { Editor, EditorState } from 'draft-js';

import { EMPTY_STRING } from './constants';
import { ISelectionRect } from './helpers/inline-toolbar';
import InlineToolbar from './InlineToolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { getSelectedText, Rect } from './helpers';
interface IEditor {
  editorState: EditorState;
  dispatch: any;
  selectionRect: ISelectionRect;
  showAddLinkModal: (value: boolean) => void;
  handleChange: any;
  editor: any;
  handleKeyCommand: any;
  inlineToolbar: any;
  showInlineToolbar: any;
  save: any;
  styleMap: any;
  myKeyBindingFn: any;
  customBlockStyle: any;
  customBlockRenderer: any;
  handleOnBlur: any;
  handleOnFocus: any;
}

const DraftEditor = ({
  editorState,
  dispatch,
  selectionRect,
  showAddLinkModal,
  handleChange,
  editor,
  handleKeyCommand,
  inlineToolbar,
  showInlineToolbar,
  save,
  styleMap,
  myKeyBindingFn,
  customBlockStyle,
  customBlockRenderer,
  handleOnBlur,
  handleOnFocus,
}: IEditor) => {
  return (
    <div
      className="editor-view__textblock--editor"
      ref={(el) => {
        if (!el) return;
        Rect.rect = el.getBoundingClientRect();
      }}
    >
      <InlineToolbar
        editorState={editorState}
        dispatch={dispatch}
        selectionRect={selectionRect}
        showAddLinkModal={showAddLinkModal}
        onChange={(state) => handleChange(state)}
        visible={inlineToolbar && getSelectedText(editorState) !== EMPTY_STRING}
      />
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={(state) => handleChange(state)}
        handleKeyCommand={(command) =>
          handleKeyCommand(command, editorState, save, dispatch, showAddLinkModal, showInlineToolbar)
        }
        customStyleMap={styleMap}
        keyBindingFn={myKeyBindingFn}
        blockStyleFn={customBlockStyle}
        blockRendererFn={customBlockRenderer}
        onBlur={(e) => handleOnBlur(e)}
        onFocus={(e) => handleOnFocus(e)}
      />
    </div>
  );
};

DraftEditor.propTypes = {
  editorState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  selectionRect: PropTypes.object.isRequired,
  showAddLinkModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  editor: PropTypes.object.isRequired,
  handleKeyCommand: PropTypes.func.isRequired,
  inlineToolbar: PropTypes.bool.isRequired,
  showInlineToolbar: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  styleMap: PropTypes.object.isRequired,
  myKeyBindingFn: PropTypes.func.isRequired,
  customBlockStyle: PropTypes.func.isRequired,
  customBlockRenderer: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
};

export default DraftEditor;
