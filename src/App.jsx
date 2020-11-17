import { ToDoList } from './components/ToDoList/ToDoList';
import './App.css';

let tasks = [
  { id: 1, title: 'done task 1', done: true },
  { id: 2, title: 'done task 2', done: true },
  { id: 3, title: 'need to do', done: false },
  { id: 4, title: 'need to do', done: false },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList tasks={tasks}></ToDoList>
      </header>
    </div>
  );
}

export default App;
