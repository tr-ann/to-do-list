import * as types from '../actionTypes';

export function addTask(title) {
  return {
    type: types.ADD_TASK,
    title,
  };
}

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id,
  };
}

export function changeTaskState(id) {
  return {
    type: types.CHANGE_TASK_STATE,
    id,
  };
}
