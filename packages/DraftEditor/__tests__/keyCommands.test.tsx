import React from 'react';
import { render } from '@testing-library/react';
import { ContentState, EditorState, SelectionState } from 'draft-js';
import DraftEditor from '../src/DraftEditor';
import { handleKeyCommand } from '../src/helpers';
import { KEY_BINDING_HANDLED, KEY_BINDING_TOOLBAR_ACTION, UPDATE_STATE } from '../src/constants';

const mockEditorProps = jest.fn();

jest.mock('draft-js', () => {
  const actual = jest.requireActual('draft-js');
  const { forwardRef } = jest.requireActual('react');
  return {
    ...actual,
    Editor: forwardRef((props: any, ref: any) => {
      mockEditorProps(props);
      return <div ref={ref} data-testid="draft-editor" />;
    }),
  };
});

jest.mock('../src/InlineToolbar', () => () => null);

const createEditorState = (text: string) => {
  const editorState = EditorState.createWithContent(ContentState.createFromText(text));
  const blockKey = editorState.getCurrentContent().getFirstBlock().getKey();
  const selection = SelectionState.createEmpty(blockKey).merge({ anchorOffset: 0, focusOffset: 5 });
  return EditorState.forceSelection(editorState, selection);
};

describe('DraftEditor key commands', () => {
  beforeEach(() => mockEditorProps.mockClear());

  test('passes the command and editor helpers to handleKeyCommand as one object', () => {
    const editorState = createEditorState('Hello world');
    const props = {
      editorState,
      dispatch: jest.fn(),
      selectionRect: { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 },
      showAddLinkModal: jest.fn(),
      handleChange: jest.fn(),
      editor: React.createRef(),
      handleKeyCommand: jest.fn(),
      inlineToolbar: false,
      showInlineToolbar: jest.fn(),
      save: jest.fn(),
      styleMap: {},
      myKeyBindingFn: jest.fn(),
      customBlockStyle: jest.fn(),
      customBlockRenderer: jest.fn(),
      handleOnBlur: jest.fn(),
      handleOnFocus: jest.fn(),
    };

    render(<DraftEditor {...props} />);
    mockEditorProps.mock.calls[0][0].handleKeyCommand('bold');

    expect(props.handleKeyCommand).toHaveBeenCalledWith({
      command: 'bold',
      editorState,
      save: props.save,
      dispatch: props.dispatch,
      showAddLinkModal: props.showAddLinkModal,
      showInlineToolbar: props.showInlineToolbar,
    });
  });

  test('applies bold to the selection', () => {
    const editorState = createEditorState('Hello world');
    const dispatch = jest.fn();
    const save = jest.fn();

    const result = handleKeyCommand({
      command: 'bold',
      editorState,
      save,
      dispatch,
      showAddLinkModal: jest.fn(),
      showInlineToolbar: jest.fn(),
    });

    const newState = dispatch.mock.calls[0][0].payload.editorState;
    expect(result).toBe(KEY_BINDING_HANDLED);
    expect(newState.getCurrentContent().getFirstBlock().getInlineStyleAt(0).has('BOLD')).toBe(true);
    expect(save).toHaveBeenCalledWith(newState);
  });

  test('selects all of the content for the toolbar shortcut', () => {
    const editorState = createEditorState('First line\nSecond line');
    const dispatch = jest.fn();
    const showInlineToolbar = jest.fn();

    handleKeyCommand({
      command: KEY_BINDING_TOOLBAR_ACTION,
      editorState,
      save: jest.fn(),
      dispatch,
      showAddLinkModal: jest.fn(),
      showInlineToolbar,
    });

    const { type, payload } = dispatch.mock.calls[0][0];
    const selection = payload.editorState.getSelection();
    const content = editorState.getCurrentContent();

    expect(type).toBe(UPDATE_STATE);
    expect(showInlineToolbar).toHaveBeenCalledWith(true);
    expect(selection.getAnchorKey()).toBe(content.getFirstBlock().getKey());
    expect(selection.getAnchorOffset()).toBe(0);
    expect(selection.getFocusKey()).toBe(content.getLastBlock().getKey());
    expect(selection.getFocusOffset()).toBe('Second line'.length);
  });
});
