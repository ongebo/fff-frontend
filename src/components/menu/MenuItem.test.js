import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { MenuItem } from './MenuItem';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const props = {
  item: '',
  unit: '',
  rate: '',
  add: jest.fn()
}

describe('<MenuItem />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <MenuItem {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a menu-item-details <div />', () => {
    const wrapper = shallow(
      <MenuItem {...props} />
    );
    expect(wrapper.find('.menu-item-details')).toHaveLength(1);
  });
});
