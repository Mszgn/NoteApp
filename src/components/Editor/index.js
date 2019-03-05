import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as editorActions from "../../redux/actions/editorActions";
import MyEditor from "./editor";

class Editor extends Component{
  render(){
    console.log("this.props",this.props.editorState.toJS());
    return(<MyEditor editorState={this.props.editorState} onSave={this.props.actions.addNote} onClear={this.props.actions.clearNote}/>)
  }
}

const mapStateToProps=state=>({
  editorState:state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
      ...editorActions
    }, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Editor);
