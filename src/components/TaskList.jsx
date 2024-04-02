import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskList = () => {
 const tasks = useSelector((state) => state.tasks);
 const dispatch = useDispatch();

 return (
    <ul className="task-list"> {/* Add class name to the ul */}
      {tasks.map((task, index) => (
        <li key={index} className="task-list-item"> {/* Add class name to the li */}
          {task}
          <button className="task-list-delete-button" onClick={() => dispatch(deleteTask(index))}>Delete</button> {/* Add class name to the button */}
        </li>
      ))}
    </ul>
 );
};

export default TaskList;
