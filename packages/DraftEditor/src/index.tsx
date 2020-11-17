// @ts-nocheck
import withUtils from "@blaze-react/utils";
import isSoftNewlineEvent from "draft-js/lib/isSoftNewlineEvent";

import {
  AtomicBlockUtils,
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
  useEffect,
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
  IMMUTABLE,
  NOT_HANDLED,
  UNSTYLED,
} from "./constants";
import DecoratedLink from "./DecoratedLink";
import { CustomDraftPlugins } from "./DraftPlugins/CustomPlugins";
import EditorViewLinkModal from "./EditorViewLinkModal";
import InlineToolbar from "./InlineToolbar";
import { IDraftEditorProps } from "./interfaces";
import linkStrategy from "./link-strategy";

const DraftEditor: FunctionComponent<IDraftEditorProps> = ({
  utils: { classNames, ErrorMessage },
  onChange,
  name,
  value,
  error,
  validationMessage,
  unSelectedText,
  selectedImages,
  handleLibraryClick,
  showImagePlugin,
  showEmbedPlugin,
  ...attrs
}): JSX.Element => {
  const draftHandledValue: DraftHandleValue = HANDLED;
  const draftNotHandledValue: DraftHandleValue = NOT_HANDLED;
  const [inlineToolbar, showInlineToolbar] = useState(false);
  const [addLinkModal, showAddLinkModal] = useState(false);
  const [linkContentState, setLinkContentState] = useState(null);

  const inputEl = useRef<any>(null);
  const globalRef = useRef<any>(null);

  const handleOnEditLink = (_contentState, entityKey, children) => {
    setLinkContentState({
      contentState: _contentState,
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

    if (value) {
      const newEditorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(value))
      );

      const newEditorStateWithDecorators = EditorState.set(newEditorState, {
        decorator: linkDecorator,
      });

      return newEditorStateWithDecorators;
    }

    return EditorState.createEmpty(linkDecorator);
  });

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

  useEffect(() => {
    if (getVisibleSelectionRect(window) !== null) {
      setSelectionRect(getVisibleSelectionRect(window));
    }
  }, [editorState, setSelectionRect]);

  const save = (state, action) => {
    const currentContent = editorState.getCurrentContent();
    const newContent = state.getCurrentContent();

    if (
      currentContent !== newContent ||
      action === "add-link" ||
      action === "update-link"
    ) {
      setLinkContentState(null);
      showInlineToolbar(false);
    }
    if (inlineToolbar) {
      showInlineToolbar(false);
    }

    setEditorState(state);
  };

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
      setEditorState(newEditorState);
      onChange(eventFormat);
    }
  };

  const contentState: ContentState = editorState.getCurrentContent();

  const isUnstyled: boolean =
    contentState.getBlockMap().first().getType() !== UNSTYLED;

  const hasTextAndUnstyled: boolean = !contentState.hasText() && isUnstyled;

  const editorClassName: string = classNames("custom-DraftEditor-editor", {
    "custom-DraftEditor-hidePlaceholder": hasTextAndUnstyled,
  });

  const getBlockStyle = (block: ContentBlock): string => {
    const isBlockquote: boolean = block.getType() === BLOCKQUOTE;
    return classNames({
      "custom-DraftEditor-blockquote": isBlockquote,
    });
  };

  const handleKeyCommand = (command: DraftEditorCommand): DraftHandleValue => {
    const newState: EditorState = RichUtils.handleKeyCommand(
      editorState,
      command
    );
    if (newState && command !== BACKSPACE_COMMAND) {
      onEditorChange(newState);
      return draftHandledValue;
    }
    return draftNotHandledValue;
  };

  const handleOnAddLink = (url, linkState) => {
    if (url === "") {
      if (linkState) {
        const newEditorState = removeEntity();
        setEditorState(newEditorState);
        save(newEditorState, "add-link");
      } else {
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
          const newEditorState = RichUtils.toggleLink(
            editorState,
            selection,
            null
          );
          setEditorState(newEditorState);
          save(newEditorState, "add-link");
        }
      }
    } else {
      const contentState = editorState.getCurrentContent();

      if (linkState) {
        const { entityKey } = linkState;
        const contentStateWithLink = contentState.replaceEntityData(entityKey, {
          url,
        });
        const newEditorState = EditorState.set(editorState, {
          currentContent: contentStateWithLink,
        });
        save(newEditorState, "add-link");
      } else {
        const contentStateWithEntity = contentState.createEntity(
          "LINK",
          "MUTABLE",
          {
            url,
          }
        );

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        const contentStateWithLink = Modifier.applyEntity(
          contentStateWithEntity,
          editorState.getSelection(),
          entityKey
        );

        const newEditorState = EditorState.set(editorState, {
          currentContent: contentStateWithLink,
        });
        save(newEditorState, "add-link");
      }
    }

    showAddLinkModal(false);
  };

  const insertBlock = () => {
    const contentStateWithEntity = contentState.createEntity("CODE", "MUTABLE");

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
  };

  const handleReturn = (event: any) => {
    if (isSoftNewlineEvent(event)) {
      onEditorChange(RichUtils.insertSoftNewline(editorState));
      return HANDLED;
    }
    return NOT_HANDLED;
  };

  const addHorizontalRule = () => {
    const contentStateWithEntity = contentState.createEntity(
      HORIZONTAL_RULE,
      IMMUTABLE,
      {}
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    onEditorChange(
      AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        HORIZONTAL_RULE
      )
    );
  };

  const blockRenderer = (contentBlock: any) => {
    const type = contentBlock.getType();

    if (type !== ATOMIC) {
      return null;
    }

    const entityKey = contentBlock.getEntityAt(0);

    if (!entityKey) {
      return {
        editable: false,
      };
    }

    const entity = contentState.getEntity(entityKey);

    if (entity && entity.type === HORIZONTAL_RULE) {
      return {
        component: () => <hr />,
        editable: false,
      };
    }

    return "";
  };

  const getSelectedText = () => {
    const selectionState = editorState.getSelection();
    const anchorKey = selectionState.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selectionState.getStartOffset();
    const end = selectionState.getEndOffset();
    return currentContentBlock.getText().slice(start, end);
  };

  return (
    <div className="custom-DraftEditor-root" ref={globalRef}>
      <CustomDraftPlugins
        editorState={editorState}
        selectedImages={selectedImages}
        handleLibraryClick={handleLibraryClick}
        unSelectedText={unSelectedText}
        onEditorChange={onEditorChange}
        toggleDraftEditor={insertBlock}
        showImagePlugin={showImagePlugin}
        showEmbedPlugin={showEmbedPlugin}
        addHorizontalRule={addHorizontalRule}
      />

      <div className={editorClassName} onWheel={() => showInlineToolbar(false)}>
        <Editor
          ref={inputEl}
          handleKeyCommand={handleKeyCommand}
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={onEditorChange}
          blockRendererFn={blockRenderer}
          handleReturn={handleReturn}
          {...attrs}
        />
        {inlineToolbar && getSelectedText() !== "" && (
          <InlineToolbar
            editorState={editorState}
            setEditorState={setEditorState}
            selectionRect={selectionRect}
            showAddLinkModal={showAddLinkModal}
          />
        )}
        {addLinkModal && (
          <EditorViewLinkModal
            editorState={editorState}
            onClose={() => showAddLinkModal(false)}
            onSave={handleOnAddLink}
            linkContentState={linkContentState}
          />
        )}
      </div>
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

DraftEditor.defaultProps = {
  error: false,
  name: "editor",
  selectedImages: [],
  showEmbedPlugin: false,
  showImagePlugin: false,
  unSelectedText: "Make sure you have a text selected",
  validationMessage: "This field is required",
};

export default withUtils(DraftEditor);
export { convertFromRaw, EditorState };
