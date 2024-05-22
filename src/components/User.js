import React from 'react';
import { useParams, Link } from 'react-router-dom';

const User = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <p>Username: {username}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default User;
