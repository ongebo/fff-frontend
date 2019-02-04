import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Spinner />', () => {
  it('contains 2 <div /> elements', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('#loader-container')).toHaveLength(1);
    expect(wrapper.find('#loader')).toHaveLength(1);
  });

  it('is rendered when its display prop is true', () => {
    const wrapper = shallow(<Spinner display={true} />);
    expect(
      wrapper
        .find('#loader-container')
        .first()
        .prop('style').display
    ).toBe('block');
    expect(wrapper.find('#loader')).toHaveLength(1);
  });
});
