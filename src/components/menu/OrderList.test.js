import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { OrderList } from './OrderList';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const props = {
  orderList: [],
  resetOrderList: jest.fn(),
  placeOrder: jest.fn()
}

describe('<OrderList />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <OrderList {...props} />
    );
    wrapper.instance().order();
    expect(wrapper).toMatchSnapshot();
  });

  it('contains an order-list <div />', () => {
    const wrapper = shallow(
      <OrderList {...props} />
    );
    expect(wrapper.find('.order-list')).toHaveLength(1);
  });
});
