import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderList from './OrderList';
import MenuItem from './MenuItem';
import './Menu.css';
import { getFoodMenu } from '../../actions/FoodOrderActions';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: []
    };

    this.addItemToList = this.addItemToList.bind(this);
    this.resetOrderList = this.resetOrderList.bind(this);
  }

  componentDidMount() {
    this.props.getFoodMenu(this.props.token);
  }

  addItemToList(item) {
    this.setState(state => {
      let inList = false;
      let orderList = [...state.orderList];
      for (let c = 0; c < orderList.length; c++) {
        if (item.item === orderList[c].item) {
          inList = true;
          orderList[c].quantity = item.quantity;
          orderList[c].cost = item.cost;
          break;
        }
      }
      if (!inList) {
        orderList.push(item);
      }
      return { orderList: orderList.filter(item => item.quantity != 0) };
    });
  }

  resetOrderList() {
    this.setState({ orderList: [] });
  }

  render() {
    return (
      <div className="clearfix">
        <div className="column main">
          <div className="food-menu">
            <h1 className="title">Food Menu</h1>
            {this.props.menu.map(item => (
              <MenuItem
                key={item.id}
                item={item.item}
                rate={item.rate}
                unit={item.unit}
                add={this.addItemToList}
              />
            ))}
          </div>
        </div>
        <OrderList
          orderList={this.state.orderList}
          resetOrderList={this.resetOrderList}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.authentication.token, menu: state.menu };
}

export default connect(
  mapStateToProps,
  { getFoodMenu }
)(Menu);
