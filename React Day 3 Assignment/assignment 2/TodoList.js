// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>ToDo List</h2>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
          style={{
            flex: '1',
            padding: '8px',
            fontSize: '16px',
            borderRadius: '5px 0 0 5px',
            border: '1px solid #ddd',
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '16px',
            borderRadius: '0 5px 5px 0',
            border: '1px solid #4CAF50',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={handleRemoveTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

