import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      container
    );
  });
});
