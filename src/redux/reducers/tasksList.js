import {
  ADD_TASK,
  CHANGE_TASK_STATE,
  DELETE_TASK,
  GET_TASKS_FAILURE,
  GET_TASKS_STARTED,
  GET_TASKS_SUCCESS,
} from '../actionTypes';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload.tasks,
        isLoading: false,
      };
    }
    case GET_TASKS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ADD_TASK: {
      const {
        payload: { newTask },
      } = action;
      const { tasks: taskList } = state;

      const updatedTaskList = [...taskList, newTask];

      return {
        ...state,
        tasks: updatedTaskList,
      };
    }

    case CHANGE_TASK_STATE: {
      const { tasks: taskList } = state;
      const { id } = action;

      const updatedTasks = taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });

      return { ...state, tasks: updatedTasks };
    }

    case DELETE_TASK: {
      const { tasks: taskList } = state;
      const { id } = action;

      const updatedTasks = taskList.filter(({ id: taskId }) => taskId !== id);

      return { ...state, tasks: updatedTasks };
    }

    default:
      return state;
  }
}
