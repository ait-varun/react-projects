"use client";
import { useState, useEffect } from "react";
import SimpleTodoList from "../common/simpleTodoList";
import toast, { Toaster } from "react-hot-toast";

export default function SimpleTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Notify user
  const notifyAddTodo = () => toast.error("Add a Todo.");
  const notifyDeleteTodo = () => toast.error("Deletd Todo.");
  const notifyAddedTodo = () => toast.success("Todo added.");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTodos = localStorage.getItem("todos1");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos1", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: self.crypto.randomUUID(), text: newTodo, completed: false },
      ]);
      setNewTodo("");
      notifyAddedTodo();
    } else {
      notifyAddTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    notifyDeleteTodo();
  };

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Simple Todo
        </h1>

        <div className="mb-4 flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-inset"
            placeholder="Add a new todo..."
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          <SimpleTodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No todos yet. Add one above!
          </p>
        )}
      </div>
    </>
  );
}
