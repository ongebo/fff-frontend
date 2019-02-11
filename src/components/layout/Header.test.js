import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Header from './Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Header />', () => {
  it('contains a <div /> with class "header"', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div').hasClass('header')).toEqual(true);
  });
});
