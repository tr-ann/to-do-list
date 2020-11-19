import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Task from '../Task/Task';
import './ToDoList.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    const tasks = [
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
    const { tasks, counter: id, editedTask } = this.state;

    if (!editedTask) return;

    const createdTask = {
      id,
      title: editedTask,
      isDone: false,
    };
    const newId = id + 1;

    this.setState({
      tasks: [...tasks, createdTask],
      counter: newId,
      editedTask: '',
    });
  };

  getTasksList = () => {
    const { tasks } = this.state;

    return tasks.map((item) => (
      <Task
        key={item.id}
        task={item}
        taskChanged={this.onTaskStateChange}
        taskDeleted={this.onTaskDelete}
      />
    ));
  };

  sortByTaskState = (task1, task2) => Number(task1.isDone) - Number(task2.isDone);

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

export default ToDoList;
