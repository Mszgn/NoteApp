export const ADD_TEXT="ADD_TEXT";
export const CLEAR_TEXT="CLEAR_TEXT";

export function addNote (editorState){
  return {type:ADD_TEXT, payload:editorState};
}

export function clearNote (){
  return {type:CLEAR_TEXT};
}
