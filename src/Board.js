import React from 'react';
import './App.css';
import {connect} from "react-redux";

function Board() {
  return (
    <div>
      <h1>REDUX REACT</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, null)(Board);
