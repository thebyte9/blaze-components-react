// @ts-nocheck
import withUtils from "@blaze-react/utils";

import {
  CompositeDecorator,
  // ContentBlock,
  // ContentState,
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  getVisibleSelectionRect,
  // Modifier,
  // RichUtils,
  // KeyBindingUtil,
  // getDefaultKeyBinding,
} from "draft-js";
import React, {
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
  useReducer,
} from "react";
import {
  // ATOMIC,
  // KEY_BINDING_SAVE_ACTION,
  // KEY_BINDING_TOOLBAR_ACTION,s
  // KEY_BINDING_ADD_LINK,
  // KEY_BINDING_HANDLED,
  // KEY_BINDING_NOT_HANDLED,
  // KEY_BINDING_UNDO,
  // BLOCKQUOTE,
  // HANDLED,
  // HORIZONTAL_RULE,
  // NOT_HANDLED,
  // LINK,
  // MUTABLE,
  // ADD_LINK,
  // BACKSPACE_COMMAND,
  UPDATE_STATE,
} from "./constants";
import DecoratedLink from "./DecoratedLink";
import EditorViewLinkModal from "./EditorViewLinkModal";
import InlineToolbar from "./InlineToolbar";
import { IDraftEditorProps } from "./interfaces";
import linkStrategy from "./link-strategy";
import parseTextBlock from "./text-block-parser";
import { Rect } from "./inline-toolbar-utils";

import {
  myKeyBindingFn,
  // styleMap,
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

  // const handleOnEditLink = (_contentState, entityKey, children) => {
  //   setLinkContentState({
  //     contentState: _contentState,
  //     entityKey,
  //   });

  //   showAddLinkModal(true);
  // };

  // const [editorState, setEditorState] = useState(() => {
  //   const linkDecorator = new CompositeDecorator([
  //     {
  //       strategy: linkStrategy,
  //       component: DecoratedLink,
  //       props: {
  //         editLinkFn: handleOnEditLink,
  //       },
  //     },
  //   ]);

  //   if (value) {
  //     const newEditorState = EditorState.createWithContent(
  //       convertFromRaw(JSON.parse(value))
  //     );

  //     const newEditorStateWithDecorators = EditorState.set(newEditorState, {
  //       decorator: linkDecorator,
  //     });

  //     return newEditorStateWithDecorators;
  //   }

  //   return EditorState.createEmpty(linkDecorator);
  // });

  // const handleOnChange = (state) => {
  //   save(state);
  // };

  const save = (updatedState) => {
    const newContent = updatedState.getCurrentContent();
    const currentContent = state.editorState.getCurrentContent();

    const newEditorContent = JSON.stringify(convertToRaw(newContent));
    if (newContent !== JSON.stringify(convertToRaw(currentContent))) {
      // eslint-disable-next-line no-param-reassign
      //  component.settings.editor = newEditorContent;
      //  onCreateComponent(selectedComponents);
    }
  };

  const handleChange = (updatedState) => {
    save(updatedState);

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

  // const save = (state, action) => {
  //   const currentContent = editorState.getCurrentContent();
  //   const newContent = state.getCurrentContent();

  //   if (
  //     currentContent !== newContent ||
  //     action === "add-link" ||
  //     action === "update-link"
  //   ) {
  //     setLinkContentState(null);
  //     showInlineToolbar(false);
  //   }
  //   if (inlineToolbar) {
  //     showInlineToolbar(false);
  //   }

  //   setEditorState(state);
  //   showInlineToolbar(true);
  // };

  // const save = updatedState => {
  //   const newContent = updatedState.getCurrentContent();
  //   const currentContent = state.editorState.getCurrentContent();

  //   const newEditorContent = JSON.stringify(convertToRaw(newContent));
  //   if (newContent !== JSON.stringify(convertToRaw(currentContent))) {
  //     // eslint-disable-next-line no-param-reassign
  //     component.settings.editor = newEditorContent;
  //     onCreateComponent(selectedComponents);
  //   }
  // };

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
      // setEditorState(newEditorState);
      dispatch({
        type: UPDATE_STATE,
        payload: {
          editorState: newEditorState,
        },
      });
      onChange(eventFormat);
    }
  };

  // const contentState: ContentState = editorState.getCurrentContent();

  // const getBlockStyle = (block: ContentBlock): string => {
  //   const isBlockquote: boolean = block.getType() === BLOCKQUOTE;
  //   return buildClassNames({
  //     "custom-DraftEditor-blockquote": isBlockquote,
  //   });
  // };

  // const handleKeyCommand = (command) => {
  //   if (command === KEY_BINDING_UNDO) {
  //     const undoState = EditorState.undo(editorState);
  //     save(undoState, UNDO);
  //     return KEY_BINDING_NOT_HANDLED;
  //   }

  //   if (command === KEY_BINDING_ADD_LINK) {
  //     showAddLinkModal(true);
  //     return KEY_BINDING_HANDLED;
  //   }

  //   if (command === KEY_BINDING_SAVE_ACTION) {
  //     save(editorState);
  //     return KEY_BINDING_HANDLED;
  //   }

  //   if (command === KEY_BINDING_TOOLBAR_ACTION) {
  //     showInlineToolbar(true);

  //     const currentContent = editorState.getCurrentContent();

  //     const selection = editorState.getSelection().merge({
  //       anchorKey: currentContent.getFirstBlock().getKey(),
  //       anchorOffset: 0,
  //       focusOffset: currentContent.getLastBlock().getText().length,
  //       focusKey: currentContent.getLastBlock().getKey(),
  //     });

  //     setEditorState(EditorState.forceSelection(editorState, selection));
  //   }

  //   const newState = RichUtils.handleKeyCommand(editorState, command);

  //   if (newState && command !== BACKSPACE_COMMAND) {
  //     setEditorState(newState);
  //     save(newState, FORMAT);

  //     return KEY_BINDING_HANDLED;
  //   }

  //   return KEY_BINDING_NOT_HANDLED;
  // };

  // const handleAddLink = (url, linkState) => {
  //   if (url === "") {
  //     if (linkState) {
  //       const newEditorState = removeEntity(editorState);
  //       setEditorState(newEditorState);
  //       save(newEditorState, ADD_LINK);
  //     } else {
  //       const selection = editorState.getSelection();
  //       if (!selection.isCollapsed()) {
  //         const newEditorState = RichUtils.toggleLink(
  //           editorState,
  //           selection,
  //           null
  //         );
  //         setEditorState(newEditorState);
  //         save(newEditorState, ADD_LINK);
  //       }
  //     }
  //   } else {
  //     const contentState = editorState.getCurrentContent();

  //     if (linkState) {
  //       const { entityKey } = linkState;
  //       const contentStateWithLink = contentState.replaceEntityData(entityKey, {
  //         url,
  //       });
  //       const newEditorState = EditorState.set(editorState, {
  //         currentContent: contentStateWithLink,
  //       });

  //       save(newEditorState, ADD_LINK);
  //     } else {
  //       const contentStateWithEntity = contentState.createEntity(
  //         LINK,
  //         MUTABLE,
  //         {
  //           url,
  //         }
  //       );

  //       const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  //       const contentStateWithLink = Modifier.applyEntity(
  //         contentStateWithEntity,
  //         editorState.getSelection(),
  //         entityKey
  //       );

  //       const newEditorState = EditorState.set(editorState, {
  //         currentContent: contentStateWithLink,
  //       });

  //       save(newEditorState, ADD_LINK);
  //     }
  //   }

  //   showAddLinkModal(false);
  // };

  // const handleReturn = (event: any) => {
  //   if (isSoftNewlineEvent(event)) {
  //     onEditorChange(RichUtils.insertSoftNewline(editorState));
  //     return HANDLED;
  //   }
  //   return NOT_HANDLED;
  // };

  // const myKeyBindingFn = (e) => {
  //   if (e.keyCode === 90 && KeyBindingUtil.hasCommandModifier(e)) {
  //     return KEY_BINDING_UNDO;
  //   }

  //   if (e.keyCode === 83 && KeyBindingUtil.hasCommandModifier(e)) {
  //     return KEY_BINDING_SAVE_ACTION;
  //   }

  //   if (e.keyCode === 65 && KeyBindingUtil.hasCommandModifier(e)) {
  //     return KEY_BINDING_TOOLBAR_ACTION;
  //   }

  //   if (e.keyCode === 75 && KeyBindingUtil.hasCommandModifier(e)) {
  //     return KEY_BINDING_ADD_LINK;
  //   }

  //   return getDefaultKeyBinding(e);
  // };

  // const blockRenderer = (contentBlock: any) => {
  //   const type = contentBlock.getType();

  //   if (type !== ATOMIC) {
  //     return null;
  //   }

  //   const entityKey = contentBlock.getEntityAt(0);

  //   if (!entityKey) {
  //     return {
  //       editable: false,
  //     };
  //   }

  //   const entity = contentState.getEntity(entityKey);

  //   if (entity && entity.type === HORIZONTAL_RULE) {
  //     return {
  //       component: () => <hr />,
  //       editable: false,
  //     };
  //   }

  //   return "";
  // };

  // const getSelectedText = () => {
  //   const selectionState = editorState.getSelection();
  //   const anchorKey = selectionState.getAnchorKey();
  //   const currentContent = editorState.getCurrentContent();
  //   const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  //   const start = selectionState.getStartOffset();
  //   const end = selectionState.getEndOffset();
  //   return currentContentBlock.getText().slice(start, end);
  // };

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
            // setEditorState={setEditorState}
            dispatch={dispatch}
            selectionRect={selectionRect}
            showAddLinkModal={showAddLinkModal}
            onChange={(state) => onEditorChange(state)}
            visible={inlineToolbar && getSelectedText(state.editorState) !== ""}
          />
          <Editor
            ref={inputEl}
            // handleKeyCommand={handleKeyCommand}
            handleKeyCommand={(command) =>
              handleKeyCommand(
                command,
                state.editorState,
                save,
                dispatch,
                showAddLinkModal,
                showInlineToolbar
              )
            }
            // blockStyleFn={getBlockStyle}
            blockStyleFn={customBlockStyle}
            // editorState={editorState}
            editorState={state.editorState}
            onChange={onEditorChange}
            // blockRendererFn={blockRenderer}
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
            // handleAddLink(url, linkState);
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
