import React from 'react';
import './App.css';
import {connect} from "react-redux";

function Board(props) {
    const {todos} = props
  return (
    <div>
        {todos.map(el => <li>{el.title}</li>)}
        <input type="text"/>
        <button>Push</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, null)(Board);
