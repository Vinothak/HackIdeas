import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import NavBar from './components/UI/NavBar/NavBar';
import UserDashboard from './user/UserDashboard/UserDashboard';
import AddForm from './user/Forms/AddForm';
import LoginForm from './user/Forms/LoginForm'
import Logout from './user/UserDashboard/Logout'

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={LoginForm}/>
        <Route path="/dashboard" exact component={UserDashboard} />
        <Route path="/add" component={AddForm} />
        <Route path="/logout" exact component={Logout}></Route>
      </div>
    </Router>
  );
}

export default App;
