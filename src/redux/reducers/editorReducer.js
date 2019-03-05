import {EditorState} from 'draft-js';
import {ADD_TEXT,CLEAR_TEXT} from "../actions/editorActions";

export default function reducer (state=EditorState.createEmpty(), action){

  switch (action.type) {
    case ADD_TEXT:
      return action.payload;
    case CLEAR_TEXT:
      return EditorState.createEmpty();
    default:
      return state;

  }
}
