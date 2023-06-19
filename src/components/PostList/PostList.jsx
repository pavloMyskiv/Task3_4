import React from 'react';
import './PostList.css';
import { useGetPostsQuery } from '../../store/appAPI';

export const PostList = () => {
  const { data: postsList = [] } = useGetPostsQuery();
  return (
    <div className="post_list">
      <h1>Posts</h1>
      {postsList.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
