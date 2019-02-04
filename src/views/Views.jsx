import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';

class Views extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route to="/" component={Home} />
          <Route to="/login" component={Login} />
          <Route to="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Views;
