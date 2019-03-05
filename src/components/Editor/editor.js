import React, {Component} from 'react';
import {Editor} from 'draft-js';

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: this.props.editorState};
    this.onChange = this.onChange.bind(this);
  
    this.onClear = this.onClear.bind(this);
  }

  onChange(editorState){
    this.props.onSave(editorState);
  }

  onClear(){
    this.props.onClear();
  }

  render() {
    return (
      <div style={{border:"1px solid black",width:"100%", height:"300px", margin:"10px"}}>
        <Editor editorState={this.props.editorState} onChange={this.onChange} />
        <button onClick={this.onClear}>Clear</button>
      </div>
    );
  }
}
