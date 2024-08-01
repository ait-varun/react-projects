"use client";
import { useState, useRef, useEffect } from "react";
import TodoList from "../common/todolist";

export default function Todo() {
  const inputRef = useRef(null);
  const [isEditing, setisEditing] = useState(null);

  const [tasks, setTasks] = useState({
    Todo: [],
    Progress: [],
    Completed: [],
  });
  const [status, setStatus] = useState("Todo");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    const newTask = {
      id: self.crypto.randomUUID(),
      task: inputRef.current.value,
      status: status,
    };
    if (!isEditing) {
      setTasks((prev) => ({
        ...prev,
        [status]: [...prev[status], newTask],
      }));
    } else {
      setTasks((prev) => ({
        ...prev,
        [status]: [...prev[status], newTask],
      }));
    }

    setisEditing(null);
    inputRef.current.value = "";
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => ({
      ...prev,
      [status]: prev[status].filter((task) => task.id !== id),
    }));
  };

  const handleEditTask = (editTask) => {
    setisEditing(editTask);
    inputRef.current.focus();
    inputRef.current.value = editTask.task;
    setTasks((prev) => ({
      ...prev,
      [status]: prev[status].filter((task) => editTask.id !== task.id),
    }));
  };

  const handleCategoryChange = (e) => {
    setStatus(e.target.value);
  };

  // Load TODOs from local storage on app startup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos) {
        setTasks(storedTodos);
      }
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          TODO LIST
        </h1>
        <form
          className="flex flex-col sm:flex-row gap-4 mb-8"
          onSubmit={handleAddTask}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a task"
            className="flex-grow border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <select
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            name="task"
            id="task"
            defaultValue={status}
            onChange={handleCategoryChange}>
            {Object.keys(tasks).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
            onClick={handleAddTask}>
            {isEditing ? "Save" : "Add Task"}
          </button>
        </form>
        <TodoList
          tasks={tasks[status]}
          status={status}
          deleteTask={handleDeleteTask}
          editTask={handleEditTask}
        />
      </div>
    </>
  );
}