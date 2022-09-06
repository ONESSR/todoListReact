import React from "react";
import { useState } from "react";

export const Input = ({ addTodo }) => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        className="input"
        onChange={handleChange}
        value={input}
      />
      <button
        type="submit"
        value="+"
        onClick={() => {
          addTodo(input);
          setInput("");
        }}
      >
        +
      </button>
    </div>
  );
};
