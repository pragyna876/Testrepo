// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onRemove }) => {
  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <div>{todo.text}</div>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
