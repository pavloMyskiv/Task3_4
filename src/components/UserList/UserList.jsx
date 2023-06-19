import React from 'react';
import './UserList.css';
import { useGetUsersQuery } from '../../store/appAPI';

export const UserList = () => {
  const { data:usersList = [] } = useGetUsersQuery();

  return (
    <div className="user_list">
      <h1>Users</h1>
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
