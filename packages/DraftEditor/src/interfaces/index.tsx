import React, { FunctionComponent } from "react";

import {
  ContentBlock,
  ContentState,
  DraftBlockRenderMap,
  DraftBlockType,
  DraftDragType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  DraftStyleMap,
  EditorState,
  SelectionState
} from "draft-js";

export type DraftTextAlignment = "left" | "center" | "right";
export type SyntheticKeyboardEvent = React.KeyboardEvent<object>;
export type SyntheticEvent = React.SyntheticEvent<object>;

export interface IImage {
  base64: string;
  src: string;
  name: string;
  key?: string;
}

export interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

export interface IDraftEditorProps {
  unSelectedText: string;
  previewImages: IImage[];
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

export interface IInlineImageControlsProps {
  editorState: EditorState;
  previewImages: IImage[];
  onToggle: (newEditorState: EditorState, entityKey: string) => EditorState;
}

export interface ILinkControlProps {
  editorState: EditorState;
  unSelectedText: string;
  onToggle: (
    newEditorState: EditorState,
    selection: SelectionState,
    entityKey: string
  ) => void;
}

export interface IInlineTypes {
  label: string;
  style: string;
}

export interface IInlineControlsProps {
  editorState: EditorState;
  onToggle: (blockType: DraftBlockType) => void;
}

export interface IStyleButtonProps {
  onToggle: (style: string) => void;
  style: string;
  active: boolean;
  label: any;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
  };
}

export interface LinkProps {
  contentState: ContentState;
  children: JSX.Element | JSX.Element[];
  entityKey: string;
}
