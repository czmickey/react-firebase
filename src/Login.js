import React, { useState } from 'react';
import fire from './config/fire';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = e => {
    setCredentials({
      email: credentials.email,
      password: credentials.password,
      ...{ [e.target.name]: e.target.value },
    });
  };

  const login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  const signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="col-md-6">
      <form>
        <div className="form-group">
          <input
            value={credentials.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            value={credentials.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={login} className="btn btn-primary">
          Login
        </button>
        <button type="submit" onClick={signup} className="btn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
