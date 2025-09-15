import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos || todos.length === 0) return <p className="empty">No todos — add one!</p>;

  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={() => onToggle(t.id)} onDelete={() => onDelete(t.id)} />
      ))}
    </ul>
  );
}