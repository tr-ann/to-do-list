import { createStore } from 'redux';
import taskReducer from './reducers/tasksList';

const store = createStore(taskReducer);

export default store;
