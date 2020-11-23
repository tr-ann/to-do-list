import { connect } from 'react-redux';
import { addTask, changeTaskState, deleteTask, getTasks } from '../../redux/actions/tasksActions';
import { selectTasks, selectError, selectIsLoading } from '../../redux/selectors/tasks';
import ToDoList from './ToDoList';

const mapStateToProps = (state) => ({
  tasks: selectTasks(state),
  error: selectError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = {
  doGetTasks: getTasks,
  doAddTask: addTask,
  doChangeTaskState: changeTaskState,
  doDeleteTask: deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
