export default function SimpleTodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center p-2 border border-gray-200 rounded-md ${
            todo.completed ? "bg-gray-100" : ""
          }`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="mr-2 form-checkbox min-h-5 min-w-5 text-blue-500"
          />
          <span
            className={`flex-grow w-fit truncate ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
