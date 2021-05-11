const componentType = {
  ROW: 'row',
  COLUMN: 'column',
  CODE: 'code',
  IMAGE: 'image',
  CAROUSEL: 'carousel',
  BUTTON: 'button',
  VIDEO: 'video',
  MODAL: 'modal',
  TEXT: 'textblock',
  CARD: 'card',
};

const showInEditorViewComponents = [
  componentType.ROW,
  componentType.COLUMN,
  componentType.CODE,
  componentType.IMAGE,
  componentType.CAROUSEL,
  componentType.BUTTON,
  componentType.VIDEO,
  componentType.MODAL,
  componentType.TEXT,
  componentType.CARD,
];

const PAGE_BUILDER_TAB = 'Page builder';
const PAGE_BUILDER_TAB_INDEX = 1;
const EDITOR_VIEW_TAB = 'Editor view';
const EDITOR_VIEW_TAB_INDEX = 0;

const YOUTUBE_REGEX = /^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/;
const VIDEO_HEIGHT = '400px';

const KEY_BINDING_SAVE_ACTION = 'myeditor-save';
const KEY_BINDING_TOOLBAR_ACTION = 'myeditor-toolbar';
const KEY_BINDING_ADD_LINK = 'myeditor-link';
const KEY_BINDING_ORDERED_LIST = 'myeditor-ordered-list';
const KEY_BINDING_UNORDERED_LIST = 'myeditor-unordered-list';
const KEY_BINDING_HANDLED = 'handled';
const KEY_BINDING_NOT_HANDLED = 'not-handled';
const KEY_BINDING_UNDO = 'myeditor-undo';

const LINK = 'LINK';
const MUTABLE = 'MUTABLE';
const ADD_LINK = 'add-link';
const UPDATE_LINK = 'update-link';
const UPDATE_STATE = 'update-state';
const UPDATE_CONTENT = 'update-content';
const UPDATED_IN_MODAL = 'update-in-modal';
const CURRENT_STATE = 'current-state';
const CLONE_STATE = 'clone-state';

const INCREMENT_KEY = 'increment-key';

const BACKSPACE = 'backspace';
const FORMAT = 'format';
const UNDO = 'undo';

const APPLY_ENTITY = 'apply-entity';
const BLOCKQUOTE = 'blockquote';
const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';
const EMPTY_STRING = '';
const LINE_THROUGH = 'line-through';
const NEW_LINE = '\n';

const ATOMIC = 'atomic';
const INLINE = 'inline';
const SAVE = 'save';
const DELETE = 'delete';

const P_TAG = 'p';
const BR_TAG = 'br';
const ANCHOR_TAG = 'a';
const INPUT_TAG = 'input';
const FIGURE_TAG = 'figure';
const HR_TAG = '<hr />';
const SUBMIT = 'submit';
const HORIZONTAL_RULE = 'HORIZONTAL_RULE';
const TARGET_BLANK = '_blank';

export {
  componentType,
  showInEditorViewComponents,
  PAGE_BUILDER_TAB_INDEX,
  EDITOR_VIEW_TAB_INDEX,
  EDITOR_VIEW_TAB,
  PAGE_BUILDER_TAB,
  YOUTUBE_REGEX,
  VIDEO_HEIGHT,
  KEY_BINDING_SAVE_ACTION,
  KEY_BINDING_TOOLBAR_ACTION,
  KEY_BINDING_ADD_LINK,
  KEY_BINDING_ORDERED_LIST,
  KEY_BINDING_UNORDERED_LIST,
  KEY_BINDING_HANDLED,
  KEY_BINDING_NOT_HANDLED,
  EMPTY_STRING,
  LINK,
  MUTABLE,
  ADD_LINK,
  UPDATE_LINK,
  APPLY_ENTITY,
  BLOCKQUOTE,
  LEFT,
  RIGHT,
  CENTER,
  LINE_THROUGH,
  ATOMIC,
  BACKSPACE,
  INLINE,
  NEW_LINE,
  FORMAT,
  UNDO,
  KEY_BINDING_UNDO,
  SAVE,
  DELETE,
  UPDATE_STATE,
  UPDATE_CONTENT,
  UPDATED_IN_MODAL,
  INCREMENT_KEY,
  CURRENT_STATE,
  CLONE_STATE,
  ANCHOR_TAG,
  BR_TAG,
  FIGURE_TAG,
  HORIZONTAL_RULE,
  HR_TAG,
  INPUT_TAG,
  P_TAG,
  SUBMIT,
  TARGET_BLANK,
};
