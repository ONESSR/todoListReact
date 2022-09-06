import React from "react";
import { Listitem } from "../ListItem";

export const List = ({ todos, deleteTodo, editTodo, doneTodo }) => {
  return (
    <section className="listContainer">
      <ul className="list">
        {todos.map((todo) => {
          return (
            <Listitem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              doneTodo={doneTodo}
            />
          );
        })}
      </ul>
    </section>
  );
};
