import withUtils from "@blaze-react/utils";
import {
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftEditorCommand,
  DraftHandleValue,
  EditorState,
  AtomicBlockUtils,
  EditorBlock,
  RichUtils
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { BLOCKQUOTE, HANDLED, NOT_HANDLED, UNSTYLED } from "./constants";
import { DraftPlugins, plugins } from "./DraftPlugins";
import { CustomDraftPlugins } from "./DraftPlugins/CustomPlugins";
import decorator from "./DraftPlugins/CustomPlugins/decorator";
import { IDraftEditorProps } from "./interfaces";
import { getEditorHeight } from "./utils";

const blockRenderer = (contentBlock: any) => {
  const type = contentBlock.getType();

  if (type === "atomic") {
    return {
      component: Component,
      editable: true,
      props: {}
    };
  }
  return "";
};

const Component = (props: any) => {
  return (
    <pre>
      <code>
        <EditorBlock {...props} />
      </code>
    </pre>
  );
};

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
  const [editorHeight, setEditorHeight] = useState<any>({});
  const inputEl = useRef<any>(null);

  useEffect((): void => {
    const initialEditorState = value
      ? convertFromRaw(JSON.parse(value))
      : EditorState.createEmpty().getCurrentContent();
    const state: EditorState = EditorState.createWithContent(
      initialEditorState,
      decorator
    );
    setEditorState(state);
    onEditorChange(state);
    calculateEditorHeight(500);
  }, []);

  useEffect((): void => {
    calculateEditorHeight();
  }, [editorState]);

  const calculateEditorHeight = (time = 0) =>
    setTimeout(() => setEditorHeight(getEditorHeight(inputEl.current)), time);

  const onEditorChange = (newEditorState: EditorState): void => {
    const currentContent = newEditorState.getCurrentContent();
    const rawValue = convertToRaw(currentContent);
    const rawValueString = JSON.stringify(rawValue);
    const eventFormat = {
      event: {
        target: {
          name,
          value: rawValueString
        }
      }
    };
    if (onChange) {
      setEditorState(newEditorState);
      onChange(eventFormat);
    }
  };

  const contentState: ContentState = editorState.getCurrentContent();

  const isUnstyled: boolean =
    contentState
      .getBlockMap()
      .first()
      .getType() !== UNSTYLED;

  const hasTextAndUnstyled: boolean = !contentState.hasText() && isUnstyled;

  const editorClassName: string = classNames("custom-DraftEditor-editor", {
    "custom-DraftEditor-hidePlaceholder": hasTextAndUnstyled
  });

  const getBlockStyle = (block: ContentBlock): string => {
    const isBlockquote: boolean = block.getType() === BLOCKQUOTE;
    return classNames({
      "custom-DraftEditor-blockquote": isBlockquote
    });
  };

  const handleKeyCommand = (command: DraftEditorCommand): DraftHandleValue => {
    const newState: EditorState = RichUtils.handleKeyCommand(
      editorState,
      command
    );
    if (newState) {
      onEditorChange(newState);
      return draftHandledValue;
    }
    return draftNotHandledValue;
  };

  const insertBlock = () => {
    const ccontentState = editorState.getCurrentContent();

    const contentStateWithEntity = ccontentState.createEntity(
      "CODE",
      "MUTABLE"
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });

    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
  };

  return (
    <div className="custom-DraftEditor-root">
      <CustomDraftPlugins
        editorState={editorState}
        selectedImages={selectedImages}
        handleLibraryClick={handleLibraryClick}
        unSelectedText={unSelectedText}
        onEditorChange={onEditorChange}
        toggleDraftEditor={insertBlock}
      />

      <div className={editorClassName} style={editorHeight}>
        <Editor
          ref={inputEl}
          handleKeyCommand={handleKeyCommand}
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={onEditorChange}
          blockRendererFn={blockRenderer}
          plugins={plugins}
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
  unSelectedText: "Make sure you have a text selected",
  validationMessage: "This field is required"
};

export default withUtils(DraftEditor);
