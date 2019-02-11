import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { NavBar } from './NavBar';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<NavBar />', () => {
  it('contains a nav-menu', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('ul').hasClass('nav-menu')).toEqual(true);
  });
});
