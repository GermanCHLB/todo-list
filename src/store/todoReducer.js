const  defaultState = {
    todos: [
        { id: 1, name: 5 },
        { id: 2, name: 1234}
    ]
};

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, todos: [...state.todos, action.payload]};
        case 'REMOVE_TASK':
            return  {...state, todos: state.todos.filter(task => task.id !== action.payload)}
        default:
            return state;
    }
}