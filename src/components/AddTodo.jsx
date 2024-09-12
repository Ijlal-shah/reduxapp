import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodohandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a todo');
      return;
    }
    dispatch(addTodo(input));
    console.log("ddddddddddddddddddddddddddd",input)
    setInput('');
  };

  return (
    <form 
      onSubmit={addTodohandler} 
      className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <label className="mb-4 w-full">
        <span className="block text-lg font-semibold text-gray-700 mb-2">Add a Todo</span>
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
 