import React from 'react';
import { Views } from './Views';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Views />', () => {
  it('contains a <Switch />', () => {
    const wrapper = shallow(<Views />);
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('redirects / to <LoginView /> when logged out', () => {
    const wrapper = shallow(<Views isLoggedIn={false} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects / to <FoodOrderView /> when logged in', () => {
    const wrapper = shallow(<Views isLoggedIn={true} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects /register to <SignupView /> when logged out', () => {
    const wrapper = shallow(<Views isLoggedIn={false} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/register"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects /register to <FoodOrderView /> when logged in', () => {
    const wrapper = shallow(<Views isLoggedIn={true} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/register"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects /login to <FoodOrderView /> when logged in', () => {
    const wrapper = shallow(<Views isLoggedIn={true} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/login"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects /login to <LoginView /> when logged out', () => {
    const wrapper = shallow(<Views isLoggedIn={false} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/login"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects /menu to <FoodOrderView /> when logged in', () => {
    const wrapper = shallow(<Views isLoggedIn={true} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/menu"]')
        .first()
        .prop('render')()
    ).toExist;
  });

  it('redirects /menu to <LoginView /> when logged out', () => {
    const wrapper = shallow(<Views isLoggedIn={false} />);
    expect(
      wrapper
        .find('Route[exact=true][path="/menu"]')
        .first()
        .prop('render')()
    ).toExist;
  });
});
