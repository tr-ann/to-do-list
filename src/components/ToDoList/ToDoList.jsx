import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Task from '../Task/Task';
import * as TaskActions from '../../store/actions/tasksActions';
import './ToDoList.css';
import tasksListReducer from '../../store/reducers/tasksList';

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
    const { addTask } = this.props;
    const { title } = this.state;

    addTask(title);

    this.setState({ title: '' });
  };

  onTaskStateChange = (id) => {
    const { changeTaskState } = this.props;
    changeTaskState(id);
  };

  onTaskDelete = (id) => {
    const { deleteTask } = this.props;
    deleteTask(id);
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

export default connect(tasksListReducer, TaskActions)(ToDoList);
