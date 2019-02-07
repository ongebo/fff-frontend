import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/layout/Header';
import LoginForm from '../components/login/LoginForm';
import Spinner from '../components/spinner/Spinner';

class LoginView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LoginForm />
        <Spinner display={this.props.isRequesting} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRequesting: state.isRequesting
  };
}

export default connect(
  mapStateToProps,
  null
)(LoginView);
