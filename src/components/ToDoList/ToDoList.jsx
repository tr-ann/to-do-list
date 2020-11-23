import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Task from '../Task/Task';
import './ToDoList.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onTaskChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onTaskCreate = () => {
    const { doAddTask } = this.props;
    const { title } = this.state;

    doAddTask(title);

    this.setState({ title: '' });
  };

  onTaskStateChange = (id) => {
    const { doChangeTaskState } = this.props;
    doChangeTaskState(id);
  };

  onTaskDelete = (id) => {
    const { doDeleteTask } = this.props;
    doDeleteTask(id);
  };

  getTasksList = () => {
    const { tasks: taskList } = this.props;

    return taskList.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          changeTask={this.onTaskStateChange}
          deleteTask={this.onTaskDelete}
        />
      );
    });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="to-do-list">
        <h2 className="to-do-list__title">To Do List</h2>
        <div>
          <Input placeholder="task title" onChange={this.onTaskChange} value={title} />
          <Button success onClick={this.onTaskCreate} title="Save" />
        </div>
        <ul className="task-list">{this.getTasksList()}</ul>
      </div>
    );
  }
}
export default ToDoList;
