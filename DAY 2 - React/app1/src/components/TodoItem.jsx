import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={onToggle} />
        <span className="text">{todo.text}</span>
      </label>
      <button className="delete" onClick={onDelete} aria-label={`Delete ${todo.text}`}>✕</button>
    </li>
  );
}