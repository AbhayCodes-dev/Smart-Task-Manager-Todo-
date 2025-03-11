import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-600 py-3 px-4 bg-slate-700 rounded-lg shadow-md transition hover:shadow-lg">
      <div className="flex items-center text-gray-200">
        <span className="mr-4 font-semibold text-gray-400">{index + 1}.</span>
        <span className={`mr-4 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
          {todo.text}
        </span>
      </div>
      <div className='flex space-x-3 ml-4'>
        <button
          className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff size={16} /> : <FaToggleOn size={16} />}
        </button>
        <button
          className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-500 transition"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash size={16} />
        </button>
        {!todo.completed && (
          <button
            className="p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-500 transition"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck size={16} />
          </button>
        )}
        {todo.completed && (
          <button
            className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-400 transition"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes size={16} />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;