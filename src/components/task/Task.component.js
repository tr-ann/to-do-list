import React from 'react';
import './Task.component.css';

export class Task extends React.Component {
  render() {
    const title = Number(this.props.task.isDone) ? (
      <span className="task_done">{this.props.task.title}</span>
    ) : (
      this.props.task.title
    );

    return (
      <li className="task">
        <label>
          <input
            type="checkbox"
            className="task__switch"
            checked={this.props.task.isDone}
            onChange={() => this.props.taskChanged()}
          />
          {title}
        </label>
      </li>
    );
  }
}
