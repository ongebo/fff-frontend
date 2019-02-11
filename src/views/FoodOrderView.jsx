import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu/Menu';
import Header from '../components/layout/Header';
import NavBar from '../components/layout/NavBar';
import Spinner from '../components/spinner/Spinner';

export class FoodOrderView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Menu />
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
)(FoodOrderView);
