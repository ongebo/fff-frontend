import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupView from './SignupView';
import LoginView from './LoginView';

class Views extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/register" component={SignupView} />
          <Route exact path="/login" component={LoginView} />
        </Switch>
      </Router>
    );
  }
}

export default Views;
