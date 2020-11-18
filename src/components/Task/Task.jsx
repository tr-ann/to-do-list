import React from 'react';
import { Button } from '../Button/Button';
import classNames from 'classnames';
import './Task.css';

export const Task = ({ task: { id, title, isDone }, taskDeleted, taskChanged }) => {
  const handleChange = () => {
    taskChanged(id);
  };

  const handleDelete = () => {
    taskDeleted(id);
  };

  const titleClass = classNames({ task_done: isDone });

  return (
    <li className="task">
      <label className="task-body">
        <input type="checkbox" className="task__switch" checked={isDone} onChange={handleChange} />
        <span className={titleClass}>{title}</span>
      </label>
      <Button danger onClick={handleDelete} title="Delete" />
    </li>
  );
};
