import React, { FunctionComponent } from 'react';

import {
  ContentBlock,
  DraftBlockRenderMap,
  DraftDragType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  DraftStyleMap,
  EditorState,
  SelectionState,
} from 'draft-js';

type DraftTextAlignment = 'left' | 'center' | 'right';
type SyntheticKeyboardEvent = React.KeyboardEvent<Record<string, unknown>>;
type SyntheticEvent = React.SyntheticEvent<Record<string, unknown>>;
type TComponent = (...arg: any) => JSX.Element;

interface IParseTextBlock {
  editor: any;
  LinkWrapper?: TComponent;
  useTargetBlank?: boolean;
}
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IDraftEditorProps {
  showImagePlugin?: boolean;
  showEmbedPlugin?: boolean;
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

  value: string;
  onFilesChange: (files: Record<string, unknown>[]) => void;
  handleLibraryClick: () => void;

  customStyleFn?: (style: DraftInlineStyle, block: ContentBlock) => DraftStyleMap;
  utils: {
    uniqueId: (element: any) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
    buildClassNames: (
      className: string | Record<string, unknown>,
      optionalClassNames?: Record<string, unknown>,
    ) => string;
  };

  onChange?: (event: { event: { target: { name: string; value: string } } }) => void;
  error?: boolean;
  validationMessage: string | JSX.Element;

  handleReturn?(e: SyntheticKeyboardEvent, editorState: EditorState): DraftHandleValue;

  handleKeyCommand?(command: DraftEditorCommand, editorState: EditorState, eventTimeStamp: number): DraftHandleValue;

  handleBeforeInput?(chars: string, editorState: EditorState, eventTimeStamp: number): DraftHandleValue;

  handlePastedText?(text: string, html: string | undefined, editorState: EditorState): DraftHandleValue;

  handleDroppedFiles?(selection: SelectionState, files: Blob[]): DraftHandleValue;

  handleDrop?(
    selection: SelectionState,
    dataTransfer: Record<string, unknown>,
    isInternal: DraftDragType,
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
interface IReactHtmlParserArgs {
  attribs: any;
  children: JSX.Element | any;
  name: string;
}

export {
  IErrorMessage,
  DraftTextAlignment,
  SyntheticKeyboardEvent,
  SyntheticEvent,
  IDraftEditorProps,
  TComponent,
  IReactHtmlParserArgs,
  IParseTextBlock,
};
