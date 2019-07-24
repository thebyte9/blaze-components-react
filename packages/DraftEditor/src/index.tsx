import withUtils from "@blaze-react/utils";
import {
  ContentBlock,
  ContentState,
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

import React, { FunctionComponent, useState } from "react";
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
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
  };

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
  utils: { classNames },
  ...attrs
}): JSX.Element => {
  const draftHandledValue: DraftHandleValue = "handled";
  const draftNotHandledValue: DraftHandleValue = "not-handled";

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
      return draftHandledValue;
    }
    return draftNotHandledValue;
  };

  const contentState: ContentState = editorState.getCurrentContent();

  const isUnstyled: boolean =
    contentState
      .getBlockMap()
      .first()
      .getType() !== "unstyled";

  const hasTextAndUnstyled: boolean = !contentState.hasText() && isUnstyled;

  const editorClassName: string = classNames("custom-DraftEditor-editor", {
    "custom-DraftEditor-hidePlaceholder": hasTextAndUnstyled
  });

  const getBlockStyle = (block: ContentBlock): string => {
    const isBlockquote: boolean = block.getType() === "blockquote";
    return classNames({
      "custom-DraftEditor-blockquote": isBlockquote
    });
  };

  return (
    <div className="custom-DraftEditor-root">
      <BlockControls editorState={editorState} onToggle={toggleBlockType} />
      <InlineControls editorState={editorState} onToggle={toggleInlineStyle} />
      <div className={editorClassName}>
        <Editor
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          {...attrs}
        />
      </div>
    </div>
  );
};
export default withUtils(DraftEditor);
