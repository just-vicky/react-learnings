import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page of our React Router example.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
