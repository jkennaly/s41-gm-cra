import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {isAuthenticated ? (
        <Link to="/dashboard">Go to Dashboard</Link>
      ) : (
        <div>
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
