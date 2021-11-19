import { EditorState, Modifier, getDefaultKeyBinding, KeyBindingUtil, RichUtils, ContentBlock } from 'draft-js';
import CustomBlock from '../CustomBlock';
import {
  KEY_BINDING_SAVE_ACTION,
  KEY_BINDING_TOOLBAR_ACTION,
  KEY_BINDING_ADD_LINK,
  KEY_BINDING_HANDLED,
  KEY_BINDING_NOT_HANDLED,
  APPLY_ENTITY,
  BLOCKQUOTE,
  LEFT,
  RIGHT,
  CENTER,
  ATOMIC,
  LINE_THROUGH,
  BACKSPACE,
  LINK,
  MUTABLE,
  EMPTY_STRING,
  UPDATE_STATE,
  UPDATE_LINK,
} from '../constants';

const removeSelectedBlocksStyle = (editorState: EditorState) => {
  const newContentState = RichUtils.tryToRemoveBlockStyle(editorState);
  if (newContentState) {
    return EditorState.push(editorState, newContentState, 'change-block-type');
  }
  return editorState;
};

const clearEditor = (editorState: EditorState) => {
  const blocks = editorState.getCurrentContent().getBlockMap().toList();
  const updatedSelection = editorState.getSelection().merge({
    anchorKey: blocks.first().get('key'),
    anchorOffset: 0,
    focusKey: blocks.last().get('key'),
    focusOffset: blocks.last().getLength(),
  });
  const newContentState = Modifier.removeRange(editorState.getCurrentContent(), updatedSelection, 'forward');

  const newState = EditorState.push(editorState, newContentState, 'remove-range');
  return removeSelectedBlocksStyle(newState);
};

const getSelectedText = (editorState: EditorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  if (!currentContentBlock) {
    return null;
  }
  const start = selectionState.getStartOffset();
  const end = selectionState.getEndOffset();
  return currentContentBlock.getText().slice(start, end);
};

const removeEntity = (editorState: EditorState) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const startKey = selectionState.getStartKey();
  const contentBlock = contentState.getBlockForKey(startKey);
  const startOffset = selectionState.getStartOffset();
  const entity = contentBlock.getEntityAt(startOffset);

  if (!entity) {
    return editorState;
  }

  let entitySelection = editorState.getSelection();

  contentBlock.findEntityRanges(
    (character) => character.getEntity() === entity,
    (start, end) => {
      entitySelection = selectionState.merge({
        anchorOffset: start,
        focusOffset: end,
      });
    },
  );

  const newContentState = Modifier.applyEntity(contentState, entitySelection, null);

  return EditorState.push(editorState, newContentState, APPLY_ENTITY);
};

const customBlockRenderer = (contentBlock: ContentBlock) => {
  if (contentBlock.getType() === ATOMIC) {
    return {
      component: CustomBlock,
      editable: false,
    };
  }

  return null;
};

const customBlockStyle = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
  if (type === BLOCKQUOTE) {
    return 'editor-view__textblock--quote';
  }

  if (type === LEFT) {
    return 'editor-view__textblock--alignment__left';
  }

  if (type === RIGHT) {
    return 'editor-view__textblock--alignment__right';
  }

  if (type === CENTER) {
    return 'editor-view__textblock--alignment__center';
  }

  return null;
};

const styleMap = {
  STRIKETHROUGH: {
    textDecoration: LINE_THROUGH,
  },
};

const myKeyBindingFn = (e: React.KeyboardEvent<Record<string, unknown>>) => {
  if (e.keyCode === 83 && KeyBindingUtil.hasCommandModifier(e)) {
    return KEY_BINDING_SAVE_ACTION;
  }

  if (e.keyCode === 65 && KeyBindingUtil.hasCommandModifier(e)) {
    return KEY_BINDING_TOOLBAR_ACTION;
  }

  if (e.keyCode === 75 && KeyBindingUtil.hasCommandModifier(e)) {
    return KEY_BINDING_ADD_LINK;
  }

  return getDefaultKeyBinding(e);
};

interface IKeyCommand {
  command: string;
  editorState: EditorState;
  save: (editorState: EditorState) => void;
  dispatch: ({ type, payload }: { type: string; payload: any }) => void;
  showAddLinkModal: (value: boolean) => void;
  showInlineToolbar: (value: boolean) => void;
}

const handleKeyCommand = ({
  command,
  editorState,
  save,
  dispatch,
  showAddLinkModal,
  showInlineToolbar,
}: IKeyCommand) => {
  if (command === KEY_BINDING_ADD_LINK) {
    showAddLinkModal(true);
    return KEY_BINDING_HANDLED;
  }

  if (command === KEY_BINDING_SAVE_ACTION) {
    save(editorState);
    return KEY_BINDING_HANDLED;
  }

  if (command === KEY_BINDING_TOOLBAR_ACTION) {
    showInlineToolbar(true);

    const currentContent = editorState.getCurrentContent();

    const selection = editorState.getSelection().merge({
      anchorKey: currentContent.getFirstBlock().getKey(),
      anchorOffset: 0,
      focusOffset: currentContent.getLastBlock().getText().length,
      focusKey: currentContent.getLastBlock().getKey(),
    });

    dispatch({
      type: UPDATE_STATE,
      payload: {
        editorState: EditorState.forceSelection(editorState, selection),
      },
    });
  }

  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState && command !== BACKSPACE) {
    dispatch({
      type: UPDATE_STATE,
      payload: {
        editorState: newState,
      },
    });

    save(newState);

    return KEY_BINDING_HANDLED;
  }

  return KEY_BINDING_NOT_HANDLED;
};

const handleReturn = (
  event: React.KeyboardEvent<Record<string, unknown>>,
  handleChange: (editorState: EditorState, source?: string
  ) => void, editorState: EditorState) => {
  if (event.shiftKey) {
    handleChange(RichUtils.insertSoftNewline(editorState));
    return KEY_BINDING_HANDLED;
  }
  return KEY_BINDING_NOT_HANDLED;
};

interface IAddLink {
  url: string;
  linkState: any;
  editorState: EditorState;
  handleChange: (editorState: EditorState, source?: string) => void;
  showAddLinkModal: (value: boolean) => void;
}

const handleAddLink = ({ url, linkState, editorState, handleChange, showAddLinkModal }: IAddLink): void => {
  if (url === EMPTY_STRING) {
    if (linkState) {
      const newEditorState = removeEntity(editorState);

      handleChange(newEditorState);
    } else {
      const selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        const newEditorState = RichUtils.toggleLink(editorState, selection, null);

        handleChange(newEditorState);
      }
    }
  } else {
    const contentState = editorState.getCurrentContent();

    if (linkState) {
      const { entityKey } = linkState;
      const contentStateWithLink = contentState.replaceEntityData(entityKey, { url });
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithLink,
      });

      handleChange(newEditorState, UPDATE_LINK);
    } else {
      const contentStateWithEntity = contentState.createEntity(LINK, MUTABLE, {
        url,
      });

      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      const contentStateWithLink = Modifier.applyEntity(contentStateWithEntity, editorState.getSelection(), entityKey);

      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithLink,
      });

      handleChange(newEditorState, LINK);
    }
  }

  showAddLinkModal(false);
};

export {
  getSelectedText,
  myKeyBindingFn,
  styleMap,
  customBlockStyle,
  customBlockRenderer,
  removeEntity,
  handleKeyCommand,
  handleAddLink,
  clearEditor,
  IAddLink,
  handleReturn
};
