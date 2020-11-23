import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import './Task.css';

const Task = ({ task: { id, title, isDone }, deleteTask, changeTask }) => {
  const handleChange = () => {
    changeTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const titleClass = classNames({ task_done: isDone });

  return (
    <li className="task">
      <label htmlFor={`task#${id}`} className="task-body">
        <input
          id={`task#${id}`}
          type="checkbox"
          className="task__switch"
          checked={isDone}
          onChange={handleChange}
        />
        <span className={titleClass}>{title}</span>
      </label>
      <Button danger onClick={handleDelete} title="Delete" />
    </li>
  );
};

export default Task;
