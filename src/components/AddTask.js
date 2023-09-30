import React, { useState, } from 'react'
import { useDispatch, } from 'react-redux';
import { addNewTask,  } from '../store/tasks';

const AddTask = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();





    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTask({task}));
        setTask("");

    }
  return (
    <div><form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Task" name='task' value={task} onChange={(e) => setTask(e.target.value)}  />
        <button type="submit">Add</button>
    </form></div>
  )
}

export default AddTask