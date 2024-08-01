import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <AddToDo setTasks={setTasks}/>
      {tasks.map(task => (
        <ToDoItem key={task._id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
  
}

export default ToDoList;
