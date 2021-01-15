// @ts-nocheck
import {
  EditorState,
  Modifier,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from "draft-js";
import {
  KEY_BINDING_SAVE_ACTION,
  KEY_BINDING_TOOLBAR_ACTION,
  KEY_BINDING_ADD_LINK,
  KEY_BINDING_HANDLED,
  KEY_BINDING_NOT_HANDLED,
  APPLY_ENTITY,
  CENTER,
  LINE_THROUGH,
  BACKSPACE,
  BLOCKQUOTE,
  LEFT,
  ATOMIC,
  RIGHT,
  LINK,
  MUTABLE,
  EMPTY_STRING,
  ADD_LINK,
} from "./constants";

const CustomBlock = (props) => {
  const HORIZONTAL_RULE = "HORIZONTAL_RULE";

  const { contentState, block } = props;

  const entity = contentState.getEntity(block.getEntityAt(0));

  const type = entity.getType();

  if (type === HORIZONTAL_RULE) {
    return <hr className="editor-view__textblock--hr" />;
  }

  return null;
};
const getSelectedText = (editorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const start = selectionState.getStartOffset();
  const end = selectionState.getEndOffset();
  return currentContentBlock.getText().slice(start, end);
};

const removeEntity = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const startKey = selectionState.getStartKey();
  const contentBlock = contentState.getBlockForKey(startKey);
  const startOffset = selectionState.getStartOffset();
  const entity = contentBlock.getEntityAt(startOffset);

  if (!entity) {
    return editorState;
  }

  let entitySelection = null;

  contentBlock.findEntityRanges(
    (character) => character.getEntity() === entity,
    (start, end) => {
      entitySelection = selectionState.merge({
        anchorOffset: start,
        focusOffset: end,
      });
    }
  );

  const newContentState = Modifier.applyEntity(
    contentState,
    entitySelection,
    null
  );

  return EditorState.push(editorState, newContentState, APPLY_ENTITY);
};

const customBlockRenderer = (contentBlock) => {
  if (contentBlock.getType() === ATOMIC) {
    return {
      component: CustomBlock,
      editable: false,
    };
  }

  return null;
};

const customBlockStyle = (contentBlock) => {
  const type = contentBlock.getType();
  if (type === BLOCKQUOTE) {
    return "editor-view__textblock--quote";
  }

  if (type === LEFT) {
    return "editor-view__textblock--alignment__left";
  }

  if (type === RIGHT) {
    return "editor-view__textblock--alignment__right";
  }

  if (type === CENTER) {
    return "editor-view__textblock--alignment__center";
  }

  return null;
};

const styleMap = {
  STRIKETHROUGH: {
    textDecoration: LINE_THROUGH,
  },
};

const myKeyBindingFn = (e) => {
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

const handleKeyCommand = (
  command,
  editorState,
  save,
  setEditorState,
  showAddLinkModal,
  showInlineToolbar
) => {
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

    setEditorState(EditorState.forceSelection(editorState, selection));
  }

  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState && command !== BACKSPACE) {
    setEditorState(newState);
    return KEY_BINDING_HANDLED;
  }

  return KEY_BINDING_NOT_HANDLED;
};

const handleAddLink = (
  url,
  linkState,
  editorState,
  setEditorState,
  save,
  showAddLinkModal
) => {
  if (url === EMPTY_STRING) {
    if (linkState) {
      const newEditorState = removeEntity(editorState);
      setEditorState(newEditorState);
      save(newEditorState, ADD_LINK);
    } else {
      const selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        const newEditorState = RichUtils.toggleLink(
          editorState,
          selection,
          null
        );
        setEditorState(newEditorState);
        save(newEditorState, ADD_LINK);
      }
    }
  } else {
    const contentState = editorState.getCurrentContent();

    if (linkState) {
      const { entityKey } = linkState;
      const contentStateWithLink = contentState.replaceEntityData(entityKey, {
        url,
      });
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithLink,
      });

      save(newEditorState, ADD_LINK);
    } else {
      const contentStateWithEntity = contentState.createEntity(LINK, MUTABLE, {
        url,
      });

      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      const contentStateWithLink = Modifier.applyEntity(
        contentStateWithEntity,
        editorState.getSelection(),
        entityKey
      );

      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithLink,
      });

      save(newEditorState, ADD_LINK);
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
};
