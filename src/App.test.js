import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  it('contains <Views />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Views')).toHaveLength(1);
  });
});
