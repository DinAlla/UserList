import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import UsersListContainer from './users/UsersListContainer';
import UserContainer from './users/UserContainer';
import './App.scss';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/users" component={UsersListContainer}/>
          <Route path="/user/:id" component={UserContainer} />
          <Redirect from='/' to='/users'/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
