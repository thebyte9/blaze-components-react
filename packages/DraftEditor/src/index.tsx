import withUtils from "@blaze-react/utils";
import Editor from "draft-js-plugins-editor";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { BLOCKQUOTE, HANDLED, NOT_HANDLED, UNSTYLED } from "./constants";
import { DraftPlugins, plugins } from "./DraftPlugins";
import { CustomDraftPlugins } from "./DraftPlugins/CustomPlugins";
import decorator from "./DraftPlugins/CustomPlugins/decorator";

import {
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftEditorCommand,
  DraftHandleValue,
  EditorState,
  RichUtils
} from "draft-js";

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
  ...attrs
}): JSX.Element => {
  const draftHandledValue: DraftHandleValue = HANDLED;
  const draftNotHandledValue: DraftHandleValue = NOT_HANDLED;

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [isDraftEditor, setIsDraftEditor] = useState<boolean>(true);
  const HTMLEditor = useRef(null);

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
  }, []);

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

  const onHTMLCodeChange = (html: string = "") => {
    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const ccontentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    setEditorState(EditorState.createWithContent(ccontentState));
  };

  const toggleDraftEditor = () => {
    if (!isDraftEditor) {
      const { current = {} }: { current: any } = HTMLEditor;
      onHTMLCodeChange(current.textContent);
    }
    setIsDraftEditor(!isDraftEditor);
  };

  const stateToHTML = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  return (
    <div className="custom-DraftEditor-root">
      <CustomDraftPlugins
        editorState={editorState}
        selectedImages={selectedImages}
        handleLibraryClick={handleLibraryClick}
        unSelectedText={unSelectedText}
        onEditorChange={onEditorChange}
        toggleDraftEditor={toggleDraftEditor}
        isDraftEditor={isDraftEditor}
      />

      <div className={editorClassName}>
        {isDraftEditor ? (
          <Editor
            handleKeyCommand={handleKeyCommand}
            blockStyleFn={getBlockStyle}
            editorState={editorState}
            onChange={onEditorChange}
            plugins={plugins}
            {...attrs}
          />
        ) : (
          <div ref={HTMLEditor} suppressContentEditableWarning contentEditable>
            <code>{stateToHTML}</code>
          </div>
        )}
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
