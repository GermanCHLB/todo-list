import {useDispatch} from "react-redux";
import TodoList from "./components/TodoList";
import "./style/App.css";
import AddTaskForm from "./components/AddTaskForm.jsx";

function App() {
    const dispatch = useDispatch();

    const addTask = (name) => {
        dispatch({type: 'ADD_TASK', payload: { id: Date.now(), name }});
    }

    const removeTask = (id) => {
        dispatch({type: 'REMOVE_TASK', payload: id});
    }

    const changeIsDone = (id) => {
        dispatch({type: 'CHANGE_IS_DONE', payload: id});
    }

    return (
        <div className="App">
            <TodoList change={changeIsDone} remove={removeTask}/>
            <AddTaskForm addTask={addTask}/>
        </div>
    );
}

export default App;
