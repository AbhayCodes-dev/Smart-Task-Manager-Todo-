import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-200 mb-3">All Your Notes Here...</h3>
      <ul className="divide-y divide-gray-600">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))
        ) : (
          <p className="text-gray-400 text-center">No tasks found...</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
