import React from 'react';

function ToDoItem({ task, setTasks }) {
  const toggleCompleted = () => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed })
    })
    .then(response => response.json())
    .then(() => {
      setTasks(prev => prev.map(item => item._id === task._id ? { ...item, completed: !item.completed } : item));
    });
  };

  const deleteTask = () => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setTasks(prev => prev.filter(item => item._id !== task._id));
    });
  };

  return (
    <div className={`flex justify-between items-center p-2 ${task.completed ? 'bg-green-200' : 'bg-pink-50'} border-b`}>
      <span className={`flex-1 ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'} font-medium`}>
        {task.title}
      </span>
      <button onClick={toggleCompleted} className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-xs">
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={deleteTask} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-xs">
        Delete
      </button>
    </div>
  );
  
}

export default ToDoItem;
