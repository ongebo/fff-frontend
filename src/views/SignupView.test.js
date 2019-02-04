import React from 'react';
import { SignupView } from './SignupView';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import SIGNUPVIEW from './SignupView';
import store from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<SignupView />', () => {
  it('renders without crashing', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <SIGNUPVIEW />
        </Router>
      </Provider>,
      document.createElement('div')
    );
  });

  it('contains a <Header />', () => {
    const wrapper = shallow(<SignupView />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });
});
