import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  it('mounts without crashing', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      container
    );
  });

  it('contains <Views />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Views')).toHaveLength(1);
  });
});
