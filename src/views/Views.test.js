import React from 'react';
import Views from './Views';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Views />', () => {
  it('contains a <Switch />', () => {
    const wrapper = shallow(<Views />);
    expect(wrapper.find('Switch')).toHaveLength(1);
  });
});
