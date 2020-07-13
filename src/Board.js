import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";

function Board(props) {

    const {todos, addTodo} = props

    const [newTodo, setNewTodo] = useState('');

    const addButtonHandler = () => {
        addTodo(newTodo)
        setNewTodo('')
    }

  return (
    <div className='App'>
        {todos.map(el => <li key={el.id}>
            {el.title}
            <button>Del</button>

        </li>)}
        <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"/>
        <button onClick={addButtonHandler}>Push</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({ type: 'TODO_ADD', payload: todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
