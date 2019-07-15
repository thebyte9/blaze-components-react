import {
  ContentBlock,
  DraftBlockRenderMap,
  DraftBlockType,
  DraftDragType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  DraftInlineStyleType,
  DraftStyleMap,
  Editor,
  EditorState,
  RichUtils,
  SelectionState
} from "draft-js";
import React, { Fragment, FunctionComponent, useState } from "react";
import BlockControls from "./BlockControls";
import InlineControls from "./InlineControls";

type DraftTextAlignment = "left" | "center" | "right";
type SyntheticKeyboardEvent = React.KeyboardEvent<object>;
type SyntheticEvent = React.SyntheticEvent<object>;
interface IDraftEditorProps {
  editorState?: EditorState;
  customStyleMap?: DraftStyleMap;
  textAlignment?: DraftTextAlignment;
  blockRenderMap?: DraftBlockRenderMap;

  tabIndex?: number;

  readOnly?: boolean;
  spellCheck?: boolean;
  ariaExpanded?: boolean;
  ariaMultiline?: boolean;
  stripPastedStyles?: boolean;

  role?: string;
  ariaLabel?: string;
  placeholder?: string;
  autoCorrect?: string;
  autoComplete?: string;
  ariaControls?: string;
  autoCapitalize?: string;
  ariaDescribedBy?: string;
  webDriverTestID?: string;
  ariaAutoComplete?: string;
  ariaActiveDescendantID?: string;

  customStyleFn?: (
    style: DraftInlineStyle,
    block: ContentBlock
  ) => DraftStyleMap;

  handleReturn?(
    e: SyntheticKeyboardEvent,
    editorState: EditorState
  ): DraftHandleValue;

  handleKeyCommand?(
    command: DraftEditorCommand,
    editorState: EditorState,
    eventTimeStamp: number
  ): DraftHandleValue;

  handleBeforeInput?(
    chars: string,
    editorState: EditorState,
    eventTimeStamp: number
  ): DraftHandleValue;

  handlePastedText?(
    text: string,
    html: string | undefined,
    editorState: EditorState
  ): DraftHandleValue;

  handleDroppedFiles?(
    selection: SelectionState,
    files: Blob[]
  ): DraftHandleValue;

  handleDrop?(
    selection: SelectionState,
    dataTransfer: object,
    isInternal: DraftDragType
  ): DraftHandleValue;

  onBlur?(e: SyntheticEvent): void;
  onFocus?(e: SyntheticEvent): void;
  onTab?(e: SyntheticKeyboardEvent): void;
  blockRendererFn?(block: ContentBlock): any;
  blockStyleFn?(block: ContentBlock): string;
  onEscape?(e: SyntheticKeyboardEvent): void;
  onUpArrow?(e: SyntheticKeyboardEvent): void;
  onLeftArrow?(e: SyntheticKeyboardEvent): void;
  onDownArrow?(e: SyntheticKeyboardEvent): void;
  onRightArrow?(e: SyntheticKeyboardEvent): void;
  handlePastedFiles?(files: Blob[]): DraftHandleValue;
  keyBindingFn?(e: SyntheticKeyboardEvent): DraftEditorCommand | null;
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
      <InlineControls editorState={editorState} onToggle={toggleInlineStyle} />
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
