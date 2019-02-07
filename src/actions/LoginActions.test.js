import * as types from './Types';
import { loginUser } from './LoginActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_URL = process.env.API_URL;

describe('loginUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches a LOGIN_SUCCESS action after a user logs in', () => {
    fetchMock.postOnce(`${API_URL}/auth/login`, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { admin: false, token: 'user-token' }
    });
    const expectedActions = [
      { type: types.LOGIN_REQUEST },
      {
        type: types.LOGIN_SUCCESS,
        payload: { isAdmin: false, token: 'user-token' }
      }
    ];
    const userData = {
      username: 'Donald',
      password: 'Av3nger'
    };
    const store = mockStore();
    store.dispatch(loginUser(userData, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches a LOGIN_FAILURE in case of a validation error', () => {
    fetchMock.postOnce(`${API_URL}/auth/login`, {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'No user with name Donald exists!' }
    });
    const expectedActions = [
      { type: types.LOGIN_REQUEST },
      {
        type: types.LOGIN_FAILURE,
        errorType: 'validation',
        message: 'No user with name Donald exists!'
      }
    ];
    const userData = {
      username: 'Donald',
      password: 'Av3nger'
    };
    const store = mockStore();
    store.dispatch(loginUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches a LOGIN_FAILURE in case of a network error', () => {
    fetchMock.postOnce(`${API_URL}/auth/login`, {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expectedActions = [
      { type: types.LOGIN_REQUEST },
      {
        type: types.LOGIN_FAILURE,
        errorType: 'network',
        message:
          'FetchError: invalid json response body at' +
          ' /undefined/auth/login reason: Unexpected end of JSON input'
      }
    ];
    const userData = {
      username: 'Donald',
      password: 'Av3nger'
    };
    const store = mockStore();
    store.dispatch(loginUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
