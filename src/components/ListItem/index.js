import React from "react";
import { Modal } from "../Modal";
import { useState } from "react";

export const Listitem = ({ todo, deleteTodo, editTodo, doneTodo }) => {
  const [openModal, setOpenModal] = useState(false);

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <li className="listitemContainer">
      <span
        className="listitemText"
        style={{
          textDecoration: todo.complete ? "line-through" : "none"
        }}
      >
        {todo.message}
      </span>
      <span className="listitemButtons">
        {openModal ? (
          <Modal todo={todo} editTodo={editTodo} closeModal={closeModal} />
        ) : null}
        <button
          onClick={() => {
            doneTodo(todo.id);
          }}
        >
          Done
        </button>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
};
