import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrder } from '../../actions/FoodOrderActions';
import './OrderList.css';

export class OrderList extends Component {
  constructor(props) {
    super(props);
    this.order = this.order.bind(this);
  }

  order() {
    const orderData = {
      items: this.props.orderList.map(item => ({
        item: item.item,
        quantity: item.quantity,
        cost: item.cost
      }))
    };
    this.props.placeOrder(this.props.token, orderData);
    this.props.resetOrderList();
  }

  render() {
    return (
      <div className="column side">
        <div className="order-list">
          <h2 className="title">Order List</h2>
          {this.props.orderList.length === 0 ? (
            <h2 id="empty-list">Order List is Empty!</h2>
          ) : (
            this.props.orderList.map(item => (
              <p key={item.item} className="order-list-item">{`${
                item.quantity
              } ${item.unit}s of ${item.item} @ Ugx ${item.cost}`}</p>
            ))
          )}
          <button
            disabled={this.props.orderList.length === 0 ? true : false}
            onClick={this.order}
            className="order"
          >
            Place Order
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.authentication.token
  };
}

export default connect(
  mapStateToProps,
  { placeOrder }
)(OrderList);
