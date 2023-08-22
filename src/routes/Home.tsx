import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the content of the home page.</p>
      <Link to="/guestRef/6cfa0297-50bd-4b38-80fc-913a7488b9a8">Test</Link>
    </div>
  );
};

export default Home;
