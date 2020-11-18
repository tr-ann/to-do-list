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

    this.state = {
      tasks,
      editedTask: '',
      counter: 5,
    };
  }

  sortByTaskState(task1, task2) {
    return Number(task1.isDone) - Number(task2.isDone);
  }

  onTaskStateChange = (id) => {
    const { tasks } = this.state;

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });

    updatedTasks.sort(this.sortByTaskState);

    this.setState({ tasks: updatedTasks });
  };

  onTaskDelete = (id) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter(({ id: taskId }) => taskId !== id);

    this.setState({ tasks: updatedTasks });
  };

  onTaskChange = (e) => {
    this.setState({ editedTask: e.target.value });
  };

  onTaskCreate = () => {
    if (!this.state.editedTask) return;

    let { tasks, counter: id, editedTask } = this.state;
    const createdTask = {
      id,
      title: editedTask,
      isDone: false,
    };

    this.setState({
      tasks: [...tasks, createdTask],
      counter: ++id,
      editedTask: '',
    });
  };

  getTasksList = () => {
    const { tasks } = this.state;

    return tasks.map((item) => {
      return (
        <Task
          key={item.id}
          task={item}
          taskChanged={this.onTaskStateChange}
          taskDeleted={this.onTaskDelete}
        />
      );
    });
  };

  render() {
    const { editedTask } = this.state;

    return (
      <div className="to-do-list">
        <h2 className="to-do-list__title">To Do List</h2>
        <div>
          <Input placeholder="task title" onChange={this.onTaskChange} value={editedTask} />
          <Button success onClick={this.onTaskCreate} title="Save" />
        </div>
        <ul className="task-list">{this.getTasksList()}</ul>
      </div>
    );
  }
}
