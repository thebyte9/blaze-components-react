import withUtils from "@blaze-react/utils";

import {
  AtomicBlockUtils,
  CompositeDecorator,
  ContentBlock,
  ContentState,
  convertFromRaw,
  convertToRaw,
  DraftBlockRenderMap,
  DraftBlockType,
  DraftDragType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  DraftInlineStyleType,
  DraftStyleMap,
  EditorState,
  RawDraftContentState,
  RichUtils,
  SelectionState
} from "draft-js";

import React, { FunctionComponent, useEffect, useState } from "react";

import Editor, { composeDecorators } from "draft-js-plugins-editor";

import createImagePlugin from "draft-js-image-plugin";

import createFocusPlugin from "draft-js-focus-plugin";

import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [blockDndPlugin, focusPlugin, imagePlugin];

import BlockControls from "./BlockControls";
import ImageControl from "./ImageControl";
import InlineControls from "./InlineControls";
import LinkControl from "./LinkControl";

type DraftTextAlignment = "left" | "center" | "right";
type SyntheticKeyboardEvent = React.KeyboardEvent<object>;
type SyntheticEvent = React.SyntheticEvent<object>;
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}
interface IDraftEditorProps {
  unSelectedText: string;
  editorState?: EditorState;
  customStyleMap?: DraftStyleMap;
  textAlignment?: DraftTextAlignment;
  blockRenderMap?: DraftBlockRenderMap;

  tabIndex?: number;
  name: string;

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

  value?: string;

  customStyleFn?: (
    style: DraftInlineStyle,
    block: ContentBlock
  ) => DraftStyleMap;
  utils: {
    uniqueId: (element: any) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
    classNames: (className: string | object, classNames?: object) => string;
  };

  onChange?: (event: {
    event: { target: { name: string; value: string } };
  }) => void;
  error?: boolean;
  validationMessage: string | JSX.Element;

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
  utils: { classNames, ErrorMessage },
  onChange,
  name,
  value,
  error,
  validationMessage,
  unSelectedText,
  ...attrs
}): JSX.Element => {
  const draftHandledValue: DraftHandleValue = "handled";
  const draftNotHandledValue: DraftHandleValue = "not-handled";

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const decorator = new CompositeDecorator([
    {
      component: LinkControl.Link,
      strategy: (
        contentBlock: ContentBlock,
        callback: (start: number, end: number) => void,
        availableContentState: ContentState
      ) => {
        contentBlock.findEntityRanges((character: any) => {
          const entityKey = character.getEntity();
          return (
            entityKey &&
            availableContentState.getEntity(entityKey).getType() === "LINK"
          );
        }, callback);
      }
    }
  ]);

  useEffect((): void => {
    if (value) {
      const rawObjectValue: RawDraftContentState = JSON.parse(value);
      const state: EditorState = EditorState.createWithContent(
        convertFromRaw(rawObjectValue),
        decorator
      );
      setEditorState(state);
    }
  }, []);

  const onEditorChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
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
      onChange(eventFormat);
    }
  };

  const toggleBlockType = (blockType: DraftBlockType): void =>
    onEditorChange(RichUtils.toggleBlockType(editorState, blockType));

  const toggleInlineStyle = (inlineStyle: DraftInlineStyleType): void =>
    onEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const toggleLink = (
    newEditorState: EditorState,
    selection: SelectionState,
    entityKey: string
  ): void => {
    onEditorChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
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

  const handleClick = (newEditorState: EditorState, entityKey: string): void =>
    onEditorChange(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );

  return (
    <div className="custom-DraftEditor-root">
      <BlockControls editorState={editorState} onToggle={toggleBlockType} />
      <InlineControls editorState={editorState} onToggle={toggleInlineStyle} />
      <ImageControl editorState={editorState} onToggle={handleClick} />
      <LinkControl
        editorState={editorState}
        onToggle={toggleLink}
        unSelectedText={unSelectedText}
      />

      <div className={editorClassName}>
        <Editor
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={onEditorChange}
          handleKeyCommand={handleKeyCommand}
          plugins={plugins}
          {...attrs}
        />
      </div>
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

DraftEditor.defaultProps = {
  error: false,
  name: "editor",
  unSelectedText: "Make sure you have a text selected",
  validationMessage: "This field is required"
};

export default withUtils(DraftEditor);
