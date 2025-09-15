import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form className="add-todo" onSubmit={submit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Add todo"
      />
      <button type="submit" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}