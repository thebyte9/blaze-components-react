import { EditorState, convertFromRaw } from 'draft-js';
import { UPDATE_STATE, UPDATED_IN_MODAL } from '../constants';

const editorReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_STATE: {
      return {
        ...state,
        editorState: action.payload.editorState,
        content: action.payload.content
      };
    }

    case UPDATED_IN_MODAL: {
      return {
        ...state,
        editorState: EditorState.push(
          state.editorState,
          convertFromRaw(JSON.parse(action.payload.content)),
          'change-block-type'
        )
      };
    }

    default:
      return state;
  }
};

export default editorReducer;
