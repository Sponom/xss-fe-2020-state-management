import React from 'react';
import { observer } from 'mobx-react';

const TodoView = observer(({ todo }) => {
  const onToggleTodo = (event, todo) => {
    todo.finished = event.target.checked;
  };
  return (
    <li>
      <label
        htmlFor={`todo-${todo.id}`}
        style={{ textDecoration: todo.finished ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.finished}
          onChange={(e) => onToggleTodo(e, todo)}
        />
        {todo.title}
      </label>
    </li>
  );
});

export default TodoView;
