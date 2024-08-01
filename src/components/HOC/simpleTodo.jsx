"use client";
import SimpleTodoList from "../common/simpleTodoList";
import { useState, useRef, useEffect } from "react";

export default function SimpleTodo() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputRef.current.value === "") return;
    const newTodo = {
      id: self.crypto.randomUUID(),
      text: inputRef.current.value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Set localStorage on mount and on todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Get todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 my-auto h-60 ">
        <h1 className="text-2xl font-bold">Simple Todo</h1>
        <div className="flex gap-4">
          <input
            ref={inputRef}
            className="border-2 border-teal-500 rounded-md p-2"
            placeholder="Add a todo"
          />
          <button
            onClick={addTodo}
            className="bg-teal-500 text-white rounded-md p-2">
            Add
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <SimpleTodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
}
