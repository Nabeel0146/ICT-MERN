import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem("todos_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    const newTodo = { id: Date.now(), text: text.trim(), done: false };
    setTodos((p) => [newTodo, ...p]);
  };

  const toggleTodo = (id) => {
    setTodos((p) => p.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id) => {
    setTodos((p) => p.filter(t => t.id !== id));
  };

  return (
    <center>
    <div className="app" >
      <header>
        <h1>Todo App</h1>
        <p>Small React app — persists in localStorage</p>
      </header>

      <main>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>

      <footer>
        <small>Built with ❤️ — edit <code>src/App.js</code> to change behavior</small>
      </footer>
    </div>
</center>
  );
}

export default App;