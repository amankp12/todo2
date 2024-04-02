import React, { useState } from 'react';
import { addTask } from '../actions/taskActions';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
 const [task, setTask] = useState('');
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
 };

 return (
    <div className="task-input"> {/* Wrap the form in a div with the class name */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          className="task-input" // Add class name to the input
        />
        <button type="submit" className="task-input-button">Add</button>
      </form>
    </div>
 );
};

export default TaskInput;
