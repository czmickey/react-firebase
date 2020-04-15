import React from 'react';
import fire from './config/fire';

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="col-md-6">
      <h1>You are home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
