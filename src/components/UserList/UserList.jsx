import React from 'react';
import './UserList.css';
import { useGetUsersQuery } from '../../store/AppAPI/userAPI.js';

export const UserList = () => {
  const {
    data: usersList = [],
    isLoading,
    error,
    isError,
  } = useGetUsersQuery();

  return (
    <div className="user_list">
      <h1>Users</h1>
      {isError ? (
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      ) : (
        ''
      )}
      {isLoading ? <div className="loader"></div> : ''}
      {usersList.map((user) => (
        <div className="user" key={user.id}>
          <div className="user_info">
            <h2>{user.username}</h2>
            <p>
              <span>Name:</span> {user.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
