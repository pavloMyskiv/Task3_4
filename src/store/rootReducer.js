import { combineReducers } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';
import postListReducer from './slices/postListSlice';
import userListReducer from './slices/userListSlice';

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  postList: postListReducer,
  userList: userListReducer,
  });
