import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { SignupForm } from './SignupForm';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<SignupForm />', () => {
  it('contains a <form /> element', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('calls registerUser() prop when form is submitted', () => {
    const props = { registerUser: jest.fn() };
    const wrapper = shallow(<SignupForm registerUser={props.registerUser} />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(props.registerUser).toHaveBeenCalled();
  });
});
