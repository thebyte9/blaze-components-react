// @ts-nocheck
import withUtils from "@blaze-react/utils";

import {
  CompositeDecorator,
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  getVisibleSelectionRect,
} from "draft-js";
import React, {
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
  useReducer,
} from "react";
import { UPDATE_STATE } from "./constants";
import DecoratedLink from "./DecoratedLink";
import EditorViewLinkModal from "./EditorViewLinkModal";
import InlineToolbar from "./InlineToolbar";
import { IDraftEditorProps } from "./interfaces";
import linkStrategy from "./link-strategy";
import parseTextBlock from "./text-block-parser";
import { Rect } from "./inline-toolbar-utils";

import {
  myKeyBindingFn,
  customBlockStyle,
  customBlockRenderer,
  handleKeyCommand,
  handleAddLink,
  getSelectedText,
  handleReturn,
} from "./helpers";

import editorReducer from "./editor-reducer";

const DraftEditor: FunctionComponent<IDraftEditorProps> = ({
  utils: { ErrorMessage },
  onChange,
  name,
  value,
  error,
  validationMessage,
  unSelectedText,
  handleLibraryClick,
  showTopBar,
  ...attrs
}): JSX.Element => {
  const [inlineToolbar, showInlineToolbar] = useState(false);
  const [addLinkModal, showAddLinkModal] = useState(false);
  const [linkContentState, setLinkContentState] = useState(null);

  const inputEl = useRef<any>(null);

  const handleOnEditLink = (contentState, entityKey) => {
    setLinkContentState({
      contentState,
      entityKey,
    });

    showAddLinkModal(true);
  };

  const linkDecorator = new CompositeDecorator([
    {
      strategy: linkStrategy,
      component: DecoratedLink,
      props: {
        editLinkFn: handleOnEditLink,
      },
    },
  ]);

  const compositeState = () => {
    try {
      if (value) {
        return EditorState.set(
          EditorState.createWithContent(convertFromRaw(JSON.parse(value))),
          {
            decorator: linkDecorator,
          }
        );
      }
      return EditorState.createEmpty(linkDecorator);
    } catch (error) {
      return EditorState.createEmpty(linkDecorator);
    }
  };

  const [state, dispatch] = useReducer(editorReducer, {
    content: value,
    editorState: compositeState(),
  });

  const handleChange = (updatedState) => {
    dispatch({
      type: UPDATE_STATE,
      payload: {
        editorState: updatedState,
      },
    });
  };

  const focusEditor = React.useCallback(() => {
    if (inputEl.current) {
      inputEl.current.focus();
      showInlineToolbar(true);
    }
  }, []);

  useLayoutEffect(() => {
    focusEditor();
  }, [focusEditor]);

  const [selectionRect, setSelectionRect] = useState({
    left: 0,
    width: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (getVisibleSelectionRect(window) !== null) {
      setSelectionRect(getVisibleSelectionRect(window));
    }
  }, [state.editorState, setSelectionRect]);

  const onEditorChange = (newEditorState: EditorState): void => {
    const currentContent = newEditorState.getCurrentContent();
    const rawValue = convertToRaw(currentContent);

    const blocks = rawValue.blocks.map((block) => {
      if (block.type === "atomic" && !!block.text.trim()) {
        block.text = block.text.replace(/\s+/g, " ");
      }
      return block;
    });

    rawValue.blocks = blocks;

    const rawValueString = JSON.stringify({
      ...rawValue,
    });

    const eventFormat = {
      event: {
        target: {
          name,
          value: rawValueString,
        },
      },
    };
    if (onChange) {
      dispatch({
        type: UPDATE_STATE,
        payload: {
          editorState: newEditorState,
        },
      });
      onChange(eventFormat);
    }
  };

  return (
    <>
      <div
        className="custom-DraftEditor-root editor-view__textblock"
        onClick={(e: any) => {
          e.stopPropagation();
          focusEditor;
        }}
      >
        <div
          className="editor-view__textblock--editor"
          ref={(el) => {
            if (!el) return;
            Rect.rect = el.getBoundingClientRect();
          }}
        >
          <InlineToolbar
            editorState={state.editorState}
            dispatch={dispatch}
            selectionRect={selectionRect}
            showAddLinkModal={showAddLinkModal}
            onChange={(state) => onEditorChange(state)}
            visible={inlineToolbar && getSelectedText(state.editorState) !== ""}
          />
          <Editor
            ref={inputEl}
            handleKeyCommand={(command) =>
              handleKeyCommand(
                command,
                state.editorState,
                dispatch,
                showAddLinkModal,
                showInlineToolbar
              )
            }
            blockStyleFn={customBlockStyle}
            editorState={state.editorState}
            onChange={onEditorChange}
            blockRendererFn={customBlockRenderer}
            handleReturn={handleReturn}
            keyBindingFn={myKeyBindingFn}
            {...attrs}
          />
        </div>
      </div>
      {addLinkModal && (
        <EditorViewLinkModal
          editorState={state.editorState}
          onClose={() => {
            showAddLinkModal(false);
            setLinkContentState(undefined);
          }}
          onSave={(url, linkState) => {
            handleAddLink(
              url,
              linkState,
              state.editorState,
              handleChange,
              showAddLinkModal
            );
            setLinkContentState(undefined);
          }}
          linkContentState={linkContentState}
        />
      )}
      {error && <ErrorMessage message={validationMessage} />}
    </>
  );
};

DraftEditor.defaultProps = {
  error: false,
  name: "editor",
  unSelectedText: "Make sure you have a text selected",
  validationMessage: "This field is required",
};

export default withUtils(DraftEditor);
export { parseTextBlock };
