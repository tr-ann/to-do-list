import React from 'react';
import { Task } from '../task/Task.component';

export class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    let tasks = [
      { id: 1, title: 'task 1', isDone: false },
      { id: 2, title: 'task 2', isDone: false },
      { id: 3, title: 'task 3', isDone: false },
      { id: 4, title: 'task 4', isDone: false },
    ];

    tasks.sort(this.sortByTaskState);

    this.state = {
      tasks: tasks,
    };
  }

  sortByTaskState(task1, task2) {
    return task1.isDone - task2.isDone;
  }

  taskStateChanged = (i) => {
    const tasks = this.state.tasks.slice();
    tasks[i].isDone = !tasks[i].isDone;

    tasks.sort(this.sortByTaskState);

    this.setState({ tasks });
  };

  taskDeleted = (i) => {
    const tasks = this.state.tasks.slice();
    tasks.splice(i, 1);

    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <div className="to-do-list">
          {this.state.tasks.map((item, index) => {
            return (
              <Task
                key={item.id}
                task={item}
                taskChanged={() => this.taskStateChanged(index)}
                taskDeleted={() => this.taskDeleted(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
