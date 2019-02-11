import React, { Component } from 'react';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      number: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({ selected: !state.selected }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: parseFloat(e.target.value) });
  }

  render() {
    const { selected } = this.state;
    return (
      <React.Fragment>
        <div
          onClick={this.handleClick}
          className={selected ? 'menu-item selected' : 'menu-item'}
        >
          <h3>{this.props.item}</h3>
          Ugx {this.props.rate} per {this.props.unit}
        </div>
        <div
          className="menu-item-details"
          style={{ display: selected ? 'block' : 'none' }}
        >
          <span className="quantity">
            Quantity:
            <input
              type="number"
              onChange={this.handleChange}
              name="number"
              id=""
              placeholder={`${this.props.unit}s`}
            />
          </span>
          <button
            onClick={() => {
              const { number } = this.state;
              const { item, rate, add, unit } = this.props;
              add({
                item,
                unit,
                quantity: number,
                cost: number * rate
              });
            }}
          >
            Add to List
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuItem;
