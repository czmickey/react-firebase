import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import fire from './config/fire';
import { AuthContext } from './Auth';

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
      .then(() => {
        console.log('logged in');
      })
      .catch(error => {
        console.log('login', error);
      });
  };

  const { currentUser } = useContext(AuthContext);

  if (!!currentUser) {
    // history.push('/'); <- error: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6">
      <h1>Login</h1>
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
      </form>
    </div>
  );
};

export default Login;
