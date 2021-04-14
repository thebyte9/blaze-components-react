import React, { Dispatch, SetStateAction } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import { v4 as uuidv4 } from 'uuid';
interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ISelectionRect {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface IInlineToolbarGenerateOptions {
  alignment?: string;
  isAlignmentDropdownOpen?: boolean;
  setAlignmentDropdownOpen?: Dispatch<SetStateAction<boolean>>;
  isFormatDropdownOpen?: boolean;
  setFormatDropdownOpen?: Dispatch<SetStateAction<boolean>>;
  isMoreDropdownOpen?: boolean;
  setMoreDropdownOpen?: Dispatch<SetStateAction<boolean>>;
}

const generateActions = ({alignment, isAlignmentDropdownOpen, setAlignmentDropdownOpen}: IInlineToolbarGenerateOptions): IInlineToolbarAction[] => [
  { label: 'Bold', style: 'BOLD', icon: 'fas fa-bold', type: ACTION_TYPE.INLINE, testId: 'bold' },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: 'fas fa-italic',
    type: ACTION_TYPE.INLINE,
    testId: 'italic'
  },
  { label: 'Link', icon: 'fas fa-link', type: ACTION_TYPE.MODAL, testId: 'link' },
  {
    label: 'Blockquote',
    style: 'blockquote',
    icon: 'fas fa-quote-right',
    type: ACTION_TYPE.BLOCK,
    testId: 'blockquote'
  },
  {
    label: 'Unordered list',
    style: 'unordered-list-item',
    icon: 'fas fa-list-ul',
    type: ACTION_TYPE.BLOCK,
    testId: 'unordered-list'
  },
  {
    label: 'Ordered list',
    style: 'ordered-list-item',
    icon: 'fas fa-list-ol',
    type: ACTION_TYPE.BLOCK,
    testId: 'ordered-list'
  },
  {
    label: 'Align left',
    icon: 'fas fa-align-left',
    style: 'left',
    cssClass: alignment,
    stateVariable: isAlignmentDropdownOpen,
    stateFn: setAlignmentDropdownOpen,
    type: ACTION_TYPE.BLOCK,
    testId: 'align-left',
    actions: [
      {
        label: 'Align left',
        style: 'left',
        icon: 'fas fa-align-left',
        type: ACTION_TYPE.BLOCK,
        testId: 'align-left'
      },
      {
        label: 'Align center',
        style: 'center',
        icon: 'fas fa-align-center',
        type: ACTION_TYPE.BLOCK,
        testId: 'align-center'
      },
      {
        label: 'Align right',
        style: 'right',
        icon: 'fas fa-align-right',
        type: ACTION_TYPE.BLOCK,
        testId: 'align-right'
      }
    ]
  }
];

export interface IInlineToolbarAction {
  action?: IInlineToolbarAction;
  label?: string;
  style?: string;
  icon?: string;
  type?: string;
  testId?: string;
  actions?: IInlineToolbarAction[];
  cssClass?: string;
  stateVariable?: boolean;
  stateFn?: (stateVariable: boolean) => void;
}

const getClassnames = (action: IInlineToolbarAction, editorState: EditorState) => {
  if (!editorState) return null;

  try {
    const currentInlineStyle = editorState.getCurrentInlineStyle();

    // inline style
    if (currentInlineStyle.size > 0 && currentInlineStyle.has(action.style!)) {
      return 'editor-view__inlinetoolbar--item editor-view__inlinetoolbar--item__active';
    }

    // block style
    const currentBlockType = RichUtils.getCurrentBlockType(editorState);
    if (currentBlockType === action.style) {
      return 'editor-view__inlinetoolbar--item editor-view__inlinetoolbar--item__active';
    }

    return 'editor-view__inlinetoolbar--item';
  } catch (error) {
    return null;
  }
};

interface IGenerateToolbarOptions {
  actions: IInlineToolbarAction[]; 
  editorState: EditorState;
  handleAction: ( action: IInlineToolbarAction, e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const generateToolbar = ({ actions, editorState, handleAction }: IGenerateToolbarOptions) => {
  if (!editorState) return null;

  try {
    return actions.map((action, index) => {
      if (action.actions) {
        const currentBlockType = RichUtils.getCurrentBlockType(editorState);
        const currentBlockAction = getCurrentBlockAction(action, currentBlockType);

        return (
          <div
            key={[action, index].join('-')}
            className={action.cssClass}
            data-testid={action.testId}
            onMouseDown={e => {
              e.preventDefault();
              e.stopPropagation();
              action.stateFn!(!action.stateVariable);
            }}
            role="button">
            <div
              className="editor-view__inlinetoolbar--more"
              key={[action, index, currentBlockAction].join('-')}>
              <span>
                <i className={currentBlockAction?.icon} />
              </span>
            </div>
            {action.stateVariable && (
              <div className="editor-view__inlinetoolbar--submenu__actions">
                {generateToolbarActions({action, handleAction, editorState})}
              </div>
            )}
          </div>
        );
      }

      const className = getClassnames(action, editorState) || undefined;

      return (
        <div
          key={uuidv4()}
          className={className}
          role="button"
          aria-label={action.label}
          data-testid={action.testId}
          onMouseDown={e => {
            e.stopPropagation();
            e.preventDefault();
            handleAction(action);
          }}>
          <i className={action.icon} />
        </div>
      );
    });
  } catch (error) {
    return [];
  }
};

interface IGenerateToolbarActions {
  action: any;
  handleAction: ( action: IInlineToolbarAction, e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  editorState: EditorState;
}

const generateToolbarActions = ({action, handleAction, editorState}: IGenerateToolbarActions) =>
  action.actions.map((a: IInlineToolbarAction, index: number) => {
    const className = getClassnames(a, editorState) || undefined;

    return (
      <div
        key={[a.label, index].join('-')}
        className={className}
        role="button"
        aria-label={a.label}
        data-testid={a.testId}
        onMouseDown={e => {
          e.preventDefault();
          e.stopPropagation();
          handleAction(a, e);
        }}>
        <i className={a.icon} />
      </div>
    );
  });

const ACTION_TYPE = {
  INLINE: 'inline',
  BLOCK: 'block',
  ATOMIC: 'atomic',
  MODAL: 'modal'
};

const ENTITY = {
  HORIZONTAL_RULE: {
    type: 'HORIZONTAL_RULE',
    mutability: 'IMMUTABLE',
    data: {}
  }
};

const getCurrentBlockAction = (action: IInlineToolbarAction, currentBlockStyle: string) => {
  if (
    currentBlockStyle === 'unstyled' ||
    currentBlockStyle.includes('header') ||
    currentBlockStyle.includes('blockquote') ||
    currentBlockStyle.includes('unordered-list-item') ||
    currentBlockStyle.includes('ordered-list-item')
  ) {
    return action.actions![0];
  }
  const result = action.actions!.filter(item => item.style === currentBlockStyle);
  return result[0];
};

const getCurrentBlockTypeLabel = (editorState: EditorState) => {
  const currentBlockType = RichUtils.getCurrentBlockType(editorState);

  switch (currentBlockType) {
    case 'unstyled':
      return 'Paragraph';
    case 'header-one':
      return 'Heading 1';
    case 'header-two':
      return 'Heading 2';
    case 'header-three':
      return 'Heading 3';
    case 'header-four':
      return 'Heading 4';
    case 'header-five':
      return 'Heading 5';
    case 'header-six':
      return 'Heading 6';
    default:
      return 'Paragraph';
  }
};

const getInlineToolbarLeftPosition = (rect: IRect, selectionRect: ISelectionRect) => {
  const toolbarSize = 500;
  const padding = 60;

  const { left, right } = selectionRect;

  if (toolbarSize > rect.width) {
    return -(padding / 2);
  }

  // left
  if (left === rect.x) {
    return left - rect.x;
  }

  if (left < toolbarSize) {
    return left - rect.x;
  }

  // right
  if (right > rect.width) {
    return rect.width - toolbarSize - padding / 2;
  }

  return left - toolbarSize;
};

const getInlineToolbarTopPosition = (selectionRect: ISelectionRect) => {
  const inlineToolbarHeight = 100;

  return selectionRect.top - inlineToolbarHeight;
};

const getDropdownClassnames = ({
  isAlignmentDropdownOpen,
  isFormatDropdownOpen,
  isMoreDropdownOpen
}: IInlineToolbarGenerateOptions) => {
  const openClassName = 'editor-view__inlinetoolbar--columns--open';
  const closedClassName = 'editor-view__inlinetoolbar--columns--closed';

  const alignment = isAlignmentDropdownOpen ? openClassName : closedClassName;
  const format = isFormatDropdownOpen ? openClassName : closedClassName;
  const more = isMoreDropdownOpen ? openClassName : closedClassName;

  return { alignment, format, more };
};

export {
  generateActions,
  getInlineToolbarLeftPosition,
  getInlineToolbarTopPosition,
  getClassnames,
  generateToolbar,
  generateToolbarActions,
  getCurrentBlockAction,
  getCurrentBlockTypeLabel,
  getDropdownClassnames,
  ACTION_TYPE,
  ENTITY
};
