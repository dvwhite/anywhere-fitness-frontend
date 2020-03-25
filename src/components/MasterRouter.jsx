import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Component imports
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import UserHome from './UserHome';
import Classes from './Classes';
import Class from './Class';

const MasterRouter = () => {
  return (
    <Switch>
      <PrivateRoute path='/user/:id' component={UserHome} />
      <PrivateRoute path='/user/:id/profile' component={Profile} />
      <PrivateRoute path='/user/:id/classes' component={Classes} />
      <PrivateRoute path='/user/:id/classes/:id' component={Class} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  );
}

export default MasterRouter;