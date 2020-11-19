import React from 'react';
import { Provider } from 'react-redux';
import { ToDoList } from './components/ToDoList';
import store from './store/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <ToDoList />
        </header>
      </Provider>
    </div>
  );
}

export default App;
