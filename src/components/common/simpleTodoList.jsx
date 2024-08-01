export default function SimpleTodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`flex items-center p-2 border border-gray-200 rounded-md ${
            todo.completed ? "bg-gray-100" : ""
          }`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
            className="mr-2 form-checkbox h-5 w-5 text-blue-500"
          />
          <span
            className={`flex-grow ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(index)}
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
