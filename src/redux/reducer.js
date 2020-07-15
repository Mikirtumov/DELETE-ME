const initialState = {
    todos: [
        {
            title: 'First todo',
            done: true,
            id: 1,
        }, {
            title: 'Second todo',
            done: false,
            id: 2,
        }
    ]
};

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, { title: action.payload, done: false }]
            };
        case 'TODO_DEL':
            const delTodos = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: delTodos
            };
        default:
            return state;
    }
};

export default todo;
