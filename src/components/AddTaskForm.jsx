import React from 'react';
import {useState} from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const AddTaskForm = ({addTask}) => {
    const [task, setTask] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (task !== '') {
                addTask(task)
                setTask('');
            }
        }}>
            <MyInput type="text" value={task} placeholder="Название задачи..." onChange={e => {
                setTask(e.target.value);
            }}/>
            <MyButton type="submit">Добавить</MyButton>
        </form>
    );
};

export default AddTaskForm;