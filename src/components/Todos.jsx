import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetode } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
console.log("llllllllllllll",todos)
  return (
    <>
      <div className="text-2xl font-bold text-center my-4">Todo List</div>
      <ul className="max-w-md mx-auto space-y-4">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 shadow-lg p-4 rounded-md hover:bg-gray-200 transition duration-200"
          >
            <span className="text-lg font-medium">{todo.text}</span>
            <button
              onClick={() => dispatch(removetode(todo.id))}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
