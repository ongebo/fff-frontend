import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
  render() {
    return (
      <div
        id="loader-container"
        style={{ display: this.props.display ? 'block' : 'none' }}
      >
        <div id="loader" />
      </div>
    );
  }
}

export default Spinner;
