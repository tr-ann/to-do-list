import { connect } from 'react-redux';
import { addTask, changeTaskState, deleteTask } from '../../store/actions/tasksActions';
import { selectTasks } from '../../store/selectors/tasks';
import ToDoList from './ToDoList';

const mapStateToProps = (state) => ({
  tasks: selectTasks(state),
});

const mapDispatchToProps = {
  doAddTask: addTask,
  doChangeTaskState: changeTaskState,
  doDeleteTask: deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
