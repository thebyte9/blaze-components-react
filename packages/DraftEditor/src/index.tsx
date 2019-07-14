import {
  DraftBlockType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyleType,
  Editor,
  EditorState,
  RichUtils
} from "draft-js";
import React, { Fragment, FunctionComponent, useState } from "react";
import BlockControls from "./BlockControls";
import InlineStyleControls from "./InlineControls";

interface IDraftEditorProps {
  attrs?: any;
}
const DraftEditor: FunctionComponent<IDraftEditorProps> = ({
  ...attrs
}): JSX.Element => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const onChange = (newEditorState: EditorState): void =>
    setEditorState(newEditorState);

  const toggleBlockType = (blockType: DraftBlockType): void =>
    onChange(RichUtils.toggleBlockType(editorState, blockType));

  const toggleInlineStyle = (inlineStyle: DraftInlineStyleType): void =>
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const handleKeyCommand = (command: DraftEditorCommand): DraftHandleValue => {
    const newState: EditorState = RichUtils.handleKeyCommand(
      editorState,
      command
    );
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <Fragment>
      <BlockControls editorState={editorState} onToggle={toggleBlockType} />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        {...attrs}
      />
    </Fragment>
  );
};
export default DraftEditor;
