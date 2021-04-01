import React, { useReducer, useState, useRef, useLayoutEffect, useImperativeHandle } from 'react';

import {
  EditorState,
  convertToRaw,
  getVisibleSelectionRect,
  CompositeDecorator,
  convertFromRaw,
  ContentState,
  Editor
} from 'draft-js';

import LinkModal from './LinkModal';
import linkStrategy from './link-strategy';
import DecoratedLink from './DecoratedLink';
import DraftEditor from './DraftEditor';
import { UPDATE_STATE } from './constants';
import { editorReducer } from './reducers';

import {
  myKeyBindingFn,
  styleMap,
  customBlockStyle,
  customBlockRenderer,
  handleKeyCommand,
  handleAddLink
} from './helpers';
import BaseComponent from './BaseComponent';

interface IEditorWrapper {
  component: any;
  onCreateComponent: any;
  onDeleteComponent: any;
  selectedComponents: any;
  allowedChildChanges: any;
  buttonEnabledState: any;
  textBlockRef: any;
}

interface ILinkContentState {
  contentState: ContentState;
  entityKey: string;
}

const DraftEditorWrapper = ({
  component,
  onCreateComponent,
  onDeleteComponent,
  selectedComponents,
  allowedChildChanges,
  buttonEnabledState,
  textBlockRef
}: IEditorWrapper) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const editor = useRef<Editor>();

  const [selectionRect, setSelectionRect] = useState({
    left: 0,
    width: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 0
  });

  
  const [inlineToolbar, showInlineToolbar] = useState(false);
  const [addLinkModal, showAddLinkModal] = useState(false);
  const [linkContentState, setLinkContentState] = useState<ILinkContentState>();

  const handleOnEditLink = (contentState: ContentState, entityKey: any) => {
    setLinkContentState({
      contentState,
      entityKey
    });

    showAddLinkModal(true);
  };

  const linkDecorator = new CompositeDecorator([
    {
      strategy: linkStrategy,
      component: DecoratedLink,
      props: {
        editLinkFn: handleOnEditLink
      }
    }
  ]);

  const compositeState = () => {
    try {
      if (component.settings.editor && component.settings.editor.length > 0) {
        return EditorState.set(
          EditorState.createWithContent(convertFromRaw(JSON.parse(component.settings.editor))),
          {
            decorator: linkDecorator
          }
        );
      }
      return EditorState.createEmpty(linkDecorator);
    } catch (error) {
      return EditorState.createEmpty(linkDecorator);
    }
  };

  const [state, dispatch] = useReducer(editorReducer, {
    content: component.settings.editor,
    editorState: compositeState()
  });

  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Event handlers
  const save = (updatedState: EditorState) => {
    const newContent = updatedState.getCurrentContent();
    const currentContent = state.editorState.getCurrentContent();

    if (newContent !== currentContent) {
      // eslint-disable-next-line no-param-reassign
      component.settings.editor = JSON.stringify(convertToRaw(newContent));
      onCreateComponent(selectedComponents);
    }
  };

  const handleOnBlur = (e: any) => {
    save(state.editorState);
    showInlineToolbar(false);
  };

  const handleOnFocus = (e: any) => {
    focusEditor();
  };

  const focusEditor = React.useCallback(
    () => {
      if (editor.current && !isModalOpen) {
        editor.current.focus();
      }
      if (editor.current) {
        showInlineToolbar(true);
      }
    },
    [isModalOpen]
  );

  const handleChange = (updatedState: EditorState) => {
    save(updatedState);

    dispatch({
      type: UPDATE_STATE,
      payload: {
        editorState: updatedState
      }
    });
  };

  const handleDelete = (deleted: any) => {
    onDeleteComponent(deleted);
  };

  useLayoutEffect(
    () => {
      focusEditor();
    },
    [focusEditor]
  );

  useLayoutEffect(
    () => {
      if (getVisibleSelectionRect(window) !== null) {
        setSelectionRect(getVisibleSelectionRect(window));
      }
    },
    [state.editorState, setSelectionRect]
  );

  useImperativeHandle(textBlockRef, () => ({
    editor: editor.current
  }));

  // props
  const componentProps = {
    component,
    onCreateComponent,
    onDeleteComponent: handleDelete,
    selectedComponents,
    allowedChildChanges,
    buttonEnabledState,
    hover,
    isModalOpen,
    setHover,
    setIsModalOpen,
    dispatch
  };

  const draftProps = {
    editorState: state.editorState,
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
  };


  const { editorState } = state;

  return (
    <BaseComponent
      className="editor-view__textblock"
      props={componentProps}
      onClick={focusEditor}>
      <DraftEditor {...draftProps} />

      {addLinkModal && (
        <LinkModal
          editorState={state.editorState}
          onClose={() => showAddLinkModal(false)}
          onSave={(url, linkState: any) => {
            handleAddLink({ url, linkState, editorState, handleChange, showAddLinkModal } );
          }}
          linkContentState={linkContentState}
        />
      )}
    </BaseComponent>
  );
};

DraftEditorWrapper.defaultProps = {
  selectedComponents: null,
  allowedChildChanges: null,
  buttonEnabledState: false,
  textBlockRef: null
};

export default DraftEditorWrapper;
