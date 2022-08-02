import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: true }
];

function App() {
  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
          </TodoList>

          <CreateTodoButton/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
