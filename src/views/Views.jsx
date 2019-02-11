import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import SignupView from './SignupView';
import LoginView from './LoginView';
import FoodOrderView from './FoodOrderView';

export class Views extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              isLoggedIn ? <Redirect to="/menu" /> : <LoginView {...props} />
            }
          />
          <Route
            exact
            path="/register"
            render={props =>
              isLoggedIn ? <Redirect to="/menu" /> : <SignupView {...props} />
            }
          />
          <Route
            exact
            path="/login"
            render={props =>
              isLoggedIn ? <Redirect to="/menu" /> : <LoginView {...props} />
            }
          />
          <Route
            exact
            path="/menu"
            render={props =>
              !isLoggedIn ? (
                <Redirect to="/login" />
              ) : (
                <FoodOrderView {...props} />
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authentication.token
  };
}

export default connect(
  mapStateToProps,
  null
)(Views);
