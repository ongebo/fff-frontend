import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/LoginActions';

export class NavBar extends Component {
  render() {
    return (
      <ul className="nav-menu">
        <li>
          <Link to="/menu" className="active">
            Menu
          </Link>
        </li>
        <li>
          <Link to="#">Order History</Link>
        </li>
        <li>
          <Link
            onClick={() => {
              this.props.logoutUser()
            }}
            to="#"
            className="right"
          >
            Log Out
          </Link>
        </li>
      </ul>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(NavBar);
