import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Menu } from './Menu';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Menu />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Menu menu={[]} token={''} getFoodMenu={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
    const instance = wrapper.instance();
    instance.addItemToList({item: '', quantity: '', cost: ''});
  });

  it('contains a clearfix <div />', () => {
    const wrapper = shallow(
      <Menu menu={[]} token={''} getFoodMenu={jest.fn()} />
    );
    expect(wrapper.find('.clearfix')).toHaveLength(1);
  });
});
