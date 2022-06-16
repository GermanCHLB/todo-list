const  defaultState = {
    todos: [
        { id: 1, name: 5, isDone: false },
        { id: 2, name: 1234, isDone: false},
    ]
};

const sort = (task) => {
    return task.reduce((acc, task) => {
        let newAcc = acc;
        if (task.isDone === true) {
            newAcc.push(task);
            return newAcc;
        } else {
            return [task, ...newAcc];
        }
    }, [])
}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, todos: sort([...state.todos, action.payload])};
        case 'REMOVE_TASK':
            return  {...state, todos: state.todos.filter(task => task.id !== action.payload)}
        case 'CHANGE_IS_DONE':
            const changed = state.todos.reduce((acc, task) => {
                const newAcc = acc;
                if (task.id === action.payload) {
                    newAcc.push({...task, isDone: !task.isDone})
                }
                else {
                    newAcc.push(task)
                }
                return newAcc;
            }, [])

            const sorted = sort(changed);
            return {...state, todos: sorted}
        default:
            return state;
    }
}