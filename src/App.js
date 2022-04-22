import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDashboard from './user/UserDashboard/UserDashboard';
import AddForm from './user/Forms/AddForm';
import { withRouter } from "react-router";
import LoginForm from './user/Forms/LoginForm'
import Logout from './user/UserDashboard/Logout'
import { useEffect } from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function App() {

  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={LoginForm }/>
        <Route path="/dashboard" exact component={UserDashboard} />
        <Route path="/add" component={AddForm} />
        <Route path="/logout" exact component={Logout}></Route>
      </div>
    </Router>
  );
}

export default App;
