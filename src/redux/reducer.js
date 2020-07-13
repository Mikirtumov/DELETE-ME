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

        default:
            return state;
    }
};

export default todo;
