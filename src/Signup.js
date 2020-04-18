import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import fire from './config/fire';

const Signup = () => {
  const history = useHistory();

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        console.log('handleSignUp', error);
      }
    },
    [history]
  );

  return (
    <div className="col-md-6">
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <input type="email" name="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
