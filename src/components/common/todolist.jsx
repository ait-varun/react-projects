export default function TodoList({ tasks, status, deleteTask, editTask }) {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
          {status}
        </h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-800">{task.task}</span>
              <div className="space-x-2">
                <button
                  className="px-3 py-1 text-sm font-medium text-green-600 border border-green-600 rounded-full hover:bg-green-50 transition duration-300 ease-in-out"
                  onClick={() => editTask(task)}>
                  Edit
                </button>
                <button
                  className="px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition duration-300 ease-in-out"
                  onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
