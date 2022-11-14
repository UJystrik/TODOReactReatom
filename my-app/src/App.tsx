import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodoT from './features/addtodo/addtodo';
import TodoList from './features/todolist/todolist';

function App() {
  return (
    <div className="App">
      <AddTodoT/>
      <TodoList/>
    </div>
  );
}

export default App;
