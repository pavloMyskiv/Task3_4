import React from 'react';
import './TodoList.css';
import { useGetTodosQuery } from '../../store/AppAPI/todoAPI.js';

export const TodoList = () => {
  const {
    data: todosList = [],
    isLoading,
    error,
    isError,
  } = useGetTodosQuery();
  if (isLoading) {
    return (
      <div className="user_list">
        <h1>Todos</h1>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="user_list">
        <h1>Todos</h1>
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      </div>
    );
  }
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
