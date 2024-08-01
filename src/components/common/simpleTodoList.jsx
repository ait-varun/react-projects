export default function SimpleTodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <div>
        {todos.map((todo) => (
          <div className="flex gap-4 items-center" key={todo.id}>
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => toggleTodo(todo.id)}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
              {todo.completed ? " COMPLETED✅" : "PENDING⏳"}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white rounded-md p-2">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
