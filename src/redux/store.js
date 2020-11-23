import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducers/tasksList';

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;
