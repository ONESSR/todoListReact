import React from "react";
import "./index.css";
import { Header } from "./components/Header/index.js";
import { Input } from "./components/Input/index.js";
import { List } from "./components/List/index.js";
import { Subhead } from "./components/Subhead";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(value) {
    setTodos([
      ...todos,
      {
        id: todos.length,
        message: value,
        complete: false
      }
    ]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function editTodo(id, message) {
    const index = todos.findIndex((todo) => {
      return todo.id === id;
    });
    const newTodos = [...todos];
    newTodos[index].message = message;
    setTodos(newTodos);
  }

  function doneTodo(id) {
    const index = todos.findIndex((todo) => {
      return todo.id === id;
    });
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  return (
    <div className="appContainer">
      {/* <Modal /> */}
      <Header />
      <Input addTodo={addTodo} />
      <Subhead />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        doneTodo={doneTodo}
      />
    </div>
  );
}

export default App;
