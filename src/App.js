import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducers/editorReducer';
import Editor from "./components/Editor";
import './App.css';
import "../node_modules/draft-js/dist/Draft.css";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <Editor/>
      </div>
      </Provider>
    );
  }
}

export default App;
