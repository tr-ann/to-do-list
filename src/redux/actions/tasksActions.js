import axios from 'axios';
import {
  GET_TASKS_STARTED,
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
  ADD_TASK,
  CHANGE_TASK_STATE,
  DELETE_TASK,
} from '../actionTypes';

const getTasksStarted = () => ({
  type: GET_TASKS_STARTED,
});

const getTasksFailure = (error) => ({
  type: GET_TASKS_FAILURE,
  payload: {
    error,
  },
});

const getTaskSuccess = (tasks) => ({
  type: GET_TASKS_SUCCESS,
  payload: {
    tasks,
  },
});

export function getTasks() {
  return async (dispatch) => {
    dispatch(getTasksStarted());

    try {
      const res = await axios.get(process.env.REACT_APP_TASKS_URL);
      setTimeout(() => {
        dispatch(getTaskSuccess(res.data));
      }, 1000);
    } catch (err) {
      getTasksFailure(err);
    }
  };
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: {
      newTask: task,
    },
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id,
  };
}

export function changeTaskState(id) {
  return {
    type: CHANGE_TASK_STATE,
    id,
  };
}
