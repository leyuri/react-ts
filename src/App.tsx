import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
    new Todo('Learn Next.js')
  ];

  const addTodoHander = (todoText: string) => {
    
  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHander } /> 
      <Todos items={todos } />
    </div>
  );
}

export default App;
