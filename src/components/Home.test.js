import React from 'react';
import Home from './Home';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Home />', () => {
  it('contains a welcome paragraph', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('p').text()).toEqual('Welcome to the Home page.');
  });
});
