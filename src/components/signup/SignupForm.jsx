import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/SignupActions';
import { withRouter, Link } from 'react-router-dom';

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      'email-address': '',
      telephone: '',
      password1: '',
      password2: '',
      passwordsNotMatching: false,
      usernameError: false,
      passwordError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // Check if error message is for the username or password.
    if (newProps.errorMessage === '') {
      this.setState({ passwordError: false });
      this.setState({ usernameError: false });
      return;
    } else if (newProps.errorMessage.includes('Password')) {
      this.setState({ passwordError: true });
      this.setState({ usernameError: false });
    } else if (newProps.errorMessage.includes('exists!')) {
      this.setState({ passwordError: false });
      this.setState({ usernameError: true });
    } else {
      this.setState({ passwordError: false });
      this.setState({ usernameError: false });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmission(e) {
    e.preventDefault();
    // Ensure passwords are equal.
    if (!this.passwordsMatching()) {
      return;
    }
    // Construct registration data.
    const userData = {
      username: this.state.username,
      email: this.state['email-address'],
      telephone: this.state.telephone,
      password: this.state.password1
    };
    // Call registerUser action with the user data.
    this.props.registerUser(userData, this.props.history);
  }

  passwordsMatching() {
    if (this.state.password1 === this.state.password2) {
      this.setState({ passwordsNotMatching: false });
      return true;
    } else {
      this.setState({ passwordsNotMatching: true });
      return false;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <span className="form-title">Create Account</span>
        Username:
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          pattern="[a-zA-Z]{3,30}( [a-zA-Z]{3,30})*"
          value={this.state.username}
          onChange={this.handleChange}
          title={nameTip}
          required
        />
        <span style={errorStyles}>
          {this.state.usernameError ? this.props.errorMessage : ''}
        </span>
        <br />
        Email:
        <input
          type="email"
          name="email-address"
          placeholder="Enter your email"
          value={this.state['email-address']}
          onChange={this.handleChange}
          required
        />
        <br />
        Telephone:
        <input
          type="text"
          name="telephone"
          placeholder="Enter your number"
          pattern="\+[0-9]{1,3}-[0-9]{3}-[0-9]{6}"
          value={this.state.telephone}
          onChange={this.handleChange}
          title={phoneTip}
          required
        />
        <br />
        Password:
        <input
          type="password"
          name="password1"
          placeholder="Enter your password"
          value={this.state.password1}
          onChange={this.handleChange}
          style={
            this.state.passwordsNotMatching ? { border: '1px solid red' } : {}
          }
          required
        />
        <br />
        Re-type Password:
        <input
          type="password"
          name="password2"
          placeholder="Confirm your password"
          value={this.state.password2}
          onChange={this.handleChange}
          style={
            this.state.passwordsNotMatching ? { border: '1px solid red' } : {}
          }
          required
        />
        <span style={errorStyles}>
          {this.state.passwordsNotMatching
            ? 'Make sure passwords are matching.'
            : this.state.passwordError
            ? this.props.errorMessage
            : ''}
        </span>
        <br />
        <input type="submit" value="Sign Up" />
        <span className="footnote">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    );
  }
}

const nameTip =
  'Username can only contain letters. Each name (firstname/lastname)' +
  ' must contain atleast three letters, names are separated by single spaces.';
const phoneTip =
  'Use the format: +xxx-xxx-xxxxxx e.g. +23-234-918719, +256-751-682390';

const errorStyles = {
  color: 'red',
  fontSize: '0.8em',
  display: 'block'
};

function mapStateToProps(state) {
  return {
    errorMessage: state.invalidRegistrationData ? state.signupError : ''
  };
}

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignupForm));
