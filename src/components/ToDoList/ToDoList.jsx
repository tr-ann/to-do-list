import React from 'react';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Task from '../Task/Task';
import './ToDoList.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      counter: 5,
    };
  }

  componentDidMount() {
    const { doGetTasks } = this.props;
    doGetTasks();
  }

  onTaskChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onTaskCreate = () => {
    const { doAddTask } = this.props;
    const { counter: id, title } = this.state;

    if (!title) return;

    const newTask = {
      id,
      title,
      isDone: false,
    };
    const newId = id + 1;

    this.setState({ counter: newId, title: '' });

    doAddTask(newTask);
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
    const { isLoading } = this.props;

    return (
      <div className="to-do-list">
        <h2 className="to-do-list__title">To Do List</h2>
        {isLoading ? (
          <div className="list-loader-container">
            <Loader type="Oval" color="#00BFFF" height={40} width={40} />
          </div>
        ) : (
          <>
            <div className="new-task-container">
              <Input placeholder="task title" onChange={this.onTaskChange} value={title} />
              <Button success onClick={this.onTaskCreate} title="Save" />
            </div>
            <ul className="task-list">{this.getTasksList()}</ul>
          </>
        )}
      </div>
    );
  }
}
export default ToDoList;
