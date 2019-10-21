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

type DraftTextAlignment = "left" | "center" | "right";
type SyntheticKeyboardEvent = React.KeyboardEvent<object>;
type SyntheticEvent = React.SyntheticEvent<object>;

interface IImage {
  base64: string;
  src: string;
  url: string;
  name: string;
  id: string;
}

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IDraftEditorProps {
  unSelectedText: string;
  previewImages: IImage[];
  uploadedFile: IImage;
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

  value: string;
  onFilesChange: (files: object[]) => void;
  handleOnSaveFiles: () => void;
  handleLibraryClick: () => void;

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

interface IInlineImageControlsProps {
  editorState: EditorState;
  previewImages: IImage[];
  onToggle: (newEditorState: EditorState, entityKey: string) => EditorState;
  onFilesChange: (files: object[]) => void;
  handleOnSaveFiles: () => void;
  handleLibraryClick: () => void;
  uploadedFile: IImage;
}

interface ILinkControlProps {
  editorState: EditorState;
  unSelectedText: string;
  onToggle: (
    newEditorState: EditorState,
    selection: SelectionState,
    entityKey: string | null
  ) => void;
}

interface IInlineTypes {
  label: string;
  style: string;
}

interface IInlineControlsProps {
  editorState: EditorState;
  onToggle: (blockType: DraftBlockType) => void;
}

interface IStyleButtonProps {
  onToggle: (style: string) => void;
  style: string;
  active: boolean;
  label: any;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
  };
}

interface ILinkProps {
  contentState: ContentState;
  children: JSX.Element | JSX.Element[];
  entityKey: string;
}

interface IPreviewIages {
  previewImages: IImage[];
}

export {
  IErrorMessage,
  DraftTextAlignment,
  SyntheticKeyboardEvent,
  SyntheticEvent,
  IImage,
  IDraftEditorProps,
  IInlineImageControlsProps,
  ILinkControlProps,
  IInlineTypes,
  IInlineControlsProps,
  IStyleButtonProps,
  ILinkProps,
  IPreviewIages
};
