import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/signup/Header';
import SignupForm from '../components/signup/SignupForm';
import Spinner from '../components/spinner/Spinner';

export class SignupView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SignupForm />
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
)(SignupView);
