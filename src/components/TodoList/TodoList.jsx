import React from 'react';
import './TodoList.css';
import { useGetTodosQuery } from '../../store/AppAPI/todoAPI.js';

export const TodoList = () => {
  const { data: todosList = [] } = useGetTodosQuery();
  return (
    <div className="todo_list">
      <h1>Todos</h1>
      {todosList.map((todo) => (
        <div className="todo" key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
    </div>
  );
};
