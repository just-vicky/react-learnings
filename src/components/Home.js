import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Home Page</h2>
      <nav>
        <ul>
          <li><Link to="/" end>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user/john">User John</Link></li>
          <li><Link to="/user/jane">User Jane</Link></li>
        </ul>
      </nav>
      <h1>Welcome to React Router</h1>
    </div>
  );
};

export default Home;
