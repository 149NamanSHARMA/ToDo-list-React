import React, { useState } from 'react';

function AddToDo({ setTasks }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    .then(response => response.json())
    .then(newTask => {
      setTasks(prev => [...prev, newTask]);
      setTitle('');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-purple-200 hover:bg-purple-300 text-gray-900 font-bold py-2 px-4 rounded">
        Add Task
      </button>
    </form>
  );
  
}

export default AddToDo;
