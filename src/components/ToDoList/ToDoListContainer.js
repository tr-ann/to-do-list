import { connect } from 'react-redux';
import { addTask, changeTaskState, deleteTask, getTasks } from '../../store/actions/tasksActions';
import { selectTasks, selectError, selectLoadingState } from '../../store/selectors/tasks';
import ToDoList from './ToDoList';

const mapStateToProps = (state) => ({
  tasks: selectTasks(state),
  error: selectError(state),
  loading: selectLoadingState(state),
});

const mapDispatchToProps = {
  doGetTasks: getTasks,
  doAddTask: addTask,
  doChangeTaskState: changeTaskState,
  doDeleteTask: deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
