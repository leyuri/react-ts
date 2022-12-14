import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHander = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })

  }

  return (
    <div >
      <NewTodo onAddTodo={addTodoHander } /> 
      <Todos items={todos } />
    </div>
  );
}

export default App;
