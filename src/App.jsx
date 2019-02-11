import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Views from './views/Views';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer position="top-center" />
        <Views />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
