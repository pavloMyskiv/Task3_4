import React from 'react';
import './PostList.css';
import { useGetPostsQuery } from '../../store/AppAPI/postAPI.js';

export const PostList = () => {
  const {
    data: postsList = [],
    isLoading,
    error,
    isError,
  } = useGetPostsQuery();
  return (
    <div className="post_list">
      <h1>Posts</h1>
      {isError ? (
        <div className="error">
          <h3>ERROR:{error.status}</h3>
          <p>{JSON.stringify(error.data)}</p>
        </div>
      ) : (
        ''
      )}
      {isLoading ? <div className="loader"></div> : ''}
      {postsList.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
