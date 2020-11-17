import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Task } from '../Task/Task';
import './ToDoList.css';

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
      tasks,
      editedTask: '',
      counter: 5,
    };
  }

  sortByTaskState(task1, task2) {
    return task1.isDone - task2.isDone;
  }

  taskStateChanged = (i) => () => {
    const { tasks } = this.state;
    tasks[i].isDone = !tasks[i].isDone;

    tasks.sort(this.sortByTaskState);

    this.setState({ tasks });
  };

  deleteTask = (i) => () => {
    const { tasks } = this.state;
    tasks.splice(i, 1);

    this.setState({ tasks });
  };

  onTaskChange = (e) => {
    this.setState({ editedTask: e.target.value });
  };

  addTask = () => {
    if (!this.state.editedTask) return;

    let { tasks, counter: id } = this.state;

    tasks.push({
      id,
      title: this.state.editedTask,
      isDone: false,
    });

    this.setState({
      tasks,
      counter: ++id,
    });
  };

  render() {
    return (
      <div className="to-do-list">
        <h2 className="to-do-list__title">To Do List</h2>
        <div>
          <Input placeholder="task title" onChanged={this.onTaskChange} />
          <Button success onClick={this.addTask} title="Save" />
        </div>
        <ul className="task-list">
          {this.state.tasks.map((item, index) => {
            return (
              <Task
                key={item.id}
                task={item}
                taskChanged={this.taskStateChanged(index)}
                taskDeleted={this.deleteTask(index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
