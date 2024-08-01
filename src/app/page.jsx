"use client";
import SimpleTodoList from "@/components/common/todolist";
import { useState, useRef } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (inputRef.current.value.trim() === "") return;
    const newTodo = {
      id: self.crypto.randomUUID(),
      task: inputRef.current.value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <main>
      {" "}
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          TODO LIST
        </h1>
        <div className="flex items-center justify-between">
          <input
            ref={inputRef}
            type="text"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out">
            Add Todo
          </button>
        </div>

        <SimpleTodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleted={handleCompleted}
        />
      </div>
    </main>
  );
}
