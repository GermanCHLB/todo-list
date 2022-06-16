import React from 'react';
import {useSelector} from "react-redux";

const TodoList = ({ change, remove }) => {
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
                            onClick={() => change(task.id)}
                            className={task.isDone ? "done" : ""}
                        >
                            <h1>{task.name}</h1>
                            <button onClick={() => {
                                remove(task.id);

                            }}>
                                X
                            </button>
                        </li>)}
                </ul>
            }
        </div>
    );
};

export default TodoList;