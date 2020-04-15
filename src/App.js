import React, { useEffect, useState } from 'react';
import fire from './config/fire';
import Login from './Login';
import Home from './Home';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return <div className="App">{user ? <Home /> : <Login />}</div>;
};

export default App;
