import React from 'react';
import Login from './Login';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Login />', () => {
  it('contains welcome text', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('p').text()).toEqual('Login to get started.');
  });
});
