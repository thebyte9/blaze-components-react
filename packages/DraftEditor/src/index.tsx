// @ts-nocheck
import withUtils from "@blaze-react/utils";
import isSoftNewlineEvent from "draft-js/lib/isSoftNewlineEvent";

import {
  AtomicBlockUtils,
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftEditorCommand,
  DraftHandleValue,
  EditorState,
  RichUtils,
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
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
import { DraftPlugins, plugins } from "./DraftPlugins";
import { CustomDraftPlugins } from "./DraftPlugins/CustomPlugins";
import decorator from "./DraftPlugins/CustomPlugins/decorator";
import { IDraftEditorProps } from "./interfaces";

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

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createWithContent(
      EditorState.createEmpty().getCurrentContent(),
      decorator
    )
  );

  const inputEl = useRef<any>(null);
  const globalRef = useRef<any>(null);

  useEffect((): void => {
    let initialEditorState = EditorState.createEmpty().getCurrentContent();

    if (value) {
      const parsedValue = JSON.parse(value);

      initialEditorState = convertFromRaw(parsedValue);
    }

    const state: EditorState = EditorState.createWithContent(
      initialEditorState,
      decorator
    );
    setEditorState(state);
    onEditorChange(state);
  }, []);

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

      <div className={editorClassName}>
        <Editor
          ref={inputEl}
          handleKeyCommand={handleKeyCommand}
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={onEditorChange}
          blockRendererFn={blockRenderer}
          plugins={plugins}
          handleReturn={handleReturn}
          {...attrs}
        />
        <DraftPlugins />
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
