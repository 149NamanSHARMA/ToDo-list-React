import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/todo-bg.jpg)', backgroundSize: 'cover' }}>
      <div className="w-full max-w-3xl bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
        <header className="bg-blue-300 text-gray-900 p-4 rounded-t-lg font-bold">
          <h1 className="text-lg">Todo List</h1>
        </header>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
