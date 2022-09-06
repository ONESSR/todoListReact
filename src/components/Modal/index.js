import React from "react";
import { useState } from "react";

export const Modal = ({ todo, editTodo, closeModal }) => {
  const [modalInput, setModalInput] = useState(todo.message);

  function handleChange(e) {
    setModalInput(e.target.value);
  }

  return (
    <div className="modalContainer">
      <div className="modal">
        <input value={modalInput} onChange={handleChange}></input>
        <button
          onClick={() => {
            editTodo(todo.id, modalInput);
            closeModal();
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};
