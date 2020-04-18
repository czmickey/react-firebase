import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="*" component={() => 'NOT FOUND'} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
