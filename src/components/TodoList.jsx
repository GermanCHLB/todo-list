import React from 'react';
import {useSelector} from "react-redux";

const TodoList = ({ remove }) => {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            {todos.length === 0
                ? <h1>Все задачи выполнены!</h1>
                :
                <ul>
                    {todos.map(task =>
                        <li
                            key={task.id}
                            onClick={() => remove(task.id)}
                        >
                            {task.name}
                        </li>)}
                </ul>
            }
        </div>
    );
};

export default TodoList;