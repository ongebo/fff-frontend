import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  it('contains a <h1 /> with welcome text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Welcome to Fast-Food-Fast!');
  });
});
