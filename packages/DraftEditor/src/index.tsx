// @ts-nocheck
import withUtils from "@blaze-react/utils";
import isSoftNewlineEvent from "draft-js/lib/isSoftNewlineEvent";

import {
  CompositeDecorator,
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftEditorCommand,
  DraftHandleValue,
  Editor,
  EditorState,
  getVisibleSelectionRect,
  Modifier,
  RichUtils,
} from "draft-js";
import React, {
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ATOMIC,
  BACKSPACE_COMMAND,
  BLOCKQUOTE,
  HANDLED,
  HORIZONTAL_RULE,
  NOT_HANDLED,
  LINK,
  MUTABLE,
  ADD_LINK,
  EMPTY_STRING,
  UPDATE_LINK,
} from "./constants";
import DecoratedLink from "./DecoratedLink";
import EditorViewLinkModal from "./EditorViewLinkModal";
import InlineToolbar from "./InlineToolbar";
import { IDraftEditorProps } from "./interfaces";
import linkStrategy from "./link-strategy";
import parseTextBlock from "./text-block-parser";
import { Rect, getSelectedText } from "./inline-toolbar-utils";

const DraftEditor = ({
  component,
  onCreateComponent,
  onDeleteComponent,
  setSelectedComponents,
  selectedComponents,
  allowedChildChanges,
  buttonEnabledState,
  textBlockRef,
}) => {
  const [inlineToolbar, showInlineToolbar] = useState(false);
  const [addLinkModal, showAddLinkModal] = useState(false);
  const [linkContentState, setLinkContentState] = useState(null);
  const editor = useRef();

  const handleOnEditLink = (contentState, entityKey, children) => {
    setLinkContentState({
      contentState,
      entityKey,
    });

    showAddLinkModal(true);
  };

  const [editorState, setEditorState] = useState(() => {
    const linkDecorator = new CompositeDecorator([
      {
        strategy: linkStrategy,
        component: DecoratedLink,
        props: {
          editLinkFn: handleOnEditLink,
        },
      },
    ]);

    // if (component.settings.editor && component.settings.editor.length > 0) {
    //   const newEditorState = EditorState.createWithContent(
    //     convertFromRaw(JSON.parse(component.settings.editor))
    //   );

    //   return EditorState.set(newEditorState, {
    //     decorator: linkDecorator,
    //   });
    // }

    return EditorState.createEmpty(linkDecorator);
  });

  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wrapper = useRef(null);
  // const client = useApolloClient();

  const save = (state, action) => {
    const currentContent = editorState.getCurrentContent();
    const newContent = state.getCurrentContent();

    // if (
    //   currentContent !== newContent ||
    //   action === ADD_LINK ||
    //   action === UPDATE_LINK
    // ) {
    //   // eslint-disable-next-line no-param-reassign
    //   component.settings.editor = JSON.stringify(convertToRaw(newContent));
    //   setSelectedComponents(selectedComponents);
    //   onCreateComponent(selectedComponents);
    //   setLinkContentState(null);
    // }

    setEditorState(state);
  };

  const handleOnChange = (state) => {
    save(state);
  };

  const focusEditor = React.useCallback(() => {
    if (editor.current && !isModalOpen) {
      editor.current.focus();
    }
    if (editor.current) {
      showInlineToolbar(true);
    }
  }, [isModalOpen]);

  useLayoutEffect(() => {
    focusEditor();
  }, [focusEditor]);

  const handleOnBlur = (e) => {
    save(editorState);
    showInlineToolbar(false);
  };

  const handleOnFocus = (e) => {
    e.preventDefault();
    setHover(true);
  };

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
  }, [editorState, setSelectionRect]);

  // useImperativeHandle(textBlockRef, () => ({
  //   editor: editor.current,
  // }));

  return (
    <>
      <div
        className="editor-view__textblock"
        onMouseLeave={(e) => {
          if (!isModalOpen) {
            setHover(false);
          }
        }}
        onMouseEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setHover(true);
        }}
        onClick={focusEditor}
        role="button"
        ref={wrapper}
      >
        {/* {hover && (
          <EditorViewOverlayToolbar
            component={component}
            onCreateComponent={onCreateComponent}
            onDeleteComponent={onDeleteComponent}
            setSelectedComponents={setSelectedComponents}
            selectedComponents={selectedComponents}
            allowedChildChanges={allowedChildChanges}
            buttonEnabledState={buttonEnabledState}
            setHover={setHover}
            setIsModalOpen={setIsModalOpen}
          />
        )} */}

        {/* <EditorViewTooltip component={component} isHovered={hover} /> */}

        <div
          role="button"
          className="editor-view__textblock--editor"
          ref={(el) => {
            if (!el) return;

            Rect.rect = { rect: el.getBoundingClientRect() };
          }}
        >
          <InlineToolbar
            editorState={editorState}
            setEditorState={setEditorState}
            selectionRect={selectionRect}
            showAddLinkModal={showAddLinkModal}
            onChange={(state) => handleOnChange(state)}
            visible={
              inlineToolbar && getSelectedText(editorState) !== EMPTY_STRING
            }
          />
          <Editor
            ref={editor}
            editorState={editorState}
            onChange={(state) => handleOnChange(state)}
            handleKeyCommand={(command) =>
              handleKeyCommand(
                command,
                editorState,
                save,
                setEditorState,
                showAddLinkModal,
                showInlineToolbar
              )
            }
            // customStyleMap={styleMap}
            // keyBindingFn={myKeyBindingFn}
            // blockStyleFn={customBlockStyle}
            // blockRendererFn={customBlockRenderer}
            onBlur={(e) => handleOnBlur(e)}
            onFocus={(e) => handleOnFocus(e)}
          />
        </div>
      </div>

      {addLinkModal && (
        <EditorViewLinkModal
          editorState={editorState}
          onClose={() => showAddLinkModal(false)}
          onSave={(url, linkState) =>
            handleAddLink(
              url,
              linkState,
              editorState,
              setEditorState,
              save,
              showAddLinkModal
            )
          }
          linkContentState={linkContentState}
        />
      )}
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
