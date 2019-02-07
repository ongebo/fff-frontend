import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/LoginActions';
import { connect } from 'react-redux';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginUser(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    return (
      <form autoComplete="on" onSubmit={this.loginUser}>
        <span className="form-title">Login</span>
        Username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          title={usernameTip}
          className={this.props.nameError ? 'error' : ''}
          placeholder="Enter your name"
          pattern="[a-zA-Z]{3,30}( [a-zA-Z]{3,30})*"
          autoFocus
          required
        />
        <span className="username-error">{this.props.nameError}</span>
        <br />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.props.passwordError ? 'error' : ''}
          placeholder="Enter your password"
          required
        />
        <span className="password-error">{this.props.passwordError}</span>
        <br />
        <input type="submit" value="Login" />
        <span className="footnote">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </span>
      </form>
    );
  }
}

const usernameTip =
  'Username can only contain letters. Each name (firstname/lastname)' +
  ' must contain atleast three letters, names are separated by single spaces.';

function mapStateToProps(state) {
  return {
    nameError: state.authentication.loginErrors.username,
    passwordError: state.authentication.loginErrors.password
  };
}

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginForm));
