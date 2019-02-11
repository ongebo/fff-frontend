import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { FoodOrderView } from './FoodOrderView';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<FoodOrderView />', () => {
  it('contains a <NavBar />', () => {
    const wrapper = shallow(<FoodOrderView isRequesting={false} />);
    expect(wrapper.find('NavBar')).toHaveLength(0);
  });
});
