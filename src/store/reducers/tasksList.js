import * as types from '../constants/actionTypes';
import sortByState from '../../utils/sortTaskByState';

const initialState = {
  tasks: [
    { id: 1, title: 'task 1', isDone: false },
    { id: 2, title: 'task 2', isDone: false },
    { id: 3, title: 'task 3', isDone: false },
    { id: 4, title: 'task 4', isDone: false },
  ],
  counter: 5,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK: {
      const { title } = action;
      const { tasks: taskList, counter: id } = state;
      if (!title) return state;

      const createdTask = {
        id,
        title,
        isDone: false,
      };
      const newId = id + 1;

      const updatedTaskList = [...taskList, createdTask];
      updatedTaskList.sort(sortByState);

      return {
        tasks: updatedTaskList,
        counter: newId,
      };
    }

    case types.CHANGE_TASK_STATE: {
      const { tasks: taskList } = state;
      const { id } = action;

      const updatedTasks = taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });

      updatedTasks.sort(sortByState);

      return { ...state, tasks: updatedTasks };
    }

    case types.DELETE_TASK: {
      const { tasks: taskList } = state;
      const { id } = action;

      const updatedTasks = taskList.filter(({ id: taskId }) => taskId !== id);

      return { ...state, tasks: updatedTasks };
    }

    default:
      return state;
  }
}
