import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
