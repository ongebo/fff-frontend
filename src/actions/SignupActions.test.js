import * as types from './Types';
import { registerUser } from './SignupActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_URL = process.env.API_URL;

describe('registerUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches a SIGNUP_SUCCESS action when a user is registered', () => {
    fetchMock.postOnce(`${API_URL}/auth/signup`, {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { message: 'you were successfully registered!' }
    });
    const expectedActions = [
      { type: types.SIGNUP_REQUEST },
      {
        type: types.SIGNUP_SUCCESS,
        message: 'you were successfully registered!'
      }
    ];
    const userData = {
      username: 'Donald',
      password: 'Av3nger',
      email: 'donald@trump.com',
      telephone: '+256-776-203798'
    };
    const store = mockStore();
    store.dispatch(registerUser(userData, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches a SIGNUP_FAILURE incase of a validation error', () => {
    fetchMock.postOnce(`${API_URL}/auth/signup`, {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'Donald already exists!' }
    });
    const expectedActions = [
      { type: types.SIGNUP_REQUEST },
      {
        type: types.SIGNUP_FAILURE,
        errorType: 'validation',
        message: 'Donald already exists!'
      }
    ];
    const userData = {
      username: 'Donald',
      password: 'Av3nger',
      email: 'donald@trump.com',
      telephone: '+256-776-203798'
    };
    const store = mockStore();
    store.dispatch(registerUser(userData, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches a SIGNUP_FAILURE incase of an error', () => {
    fetchMock.postOnce(`${API_URL}/auth/signup`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expectedActions = [
      { type: types.SIGNUP_REQUEST },
      {
        type: types.SIGNUP_FAILURE,
        errorType: 'network',
        message:
          'FetchError: invalid json response body at' +
          ' /undefined/auth/signup reason: Unexpected end of JSON input'
      }
    ];
    const userData = {
      username: 'Donald',
      password: 'Av3nger',
      email: 'donald@trump.com',
      telephone: '+256-776-203798'
    };
    const store = mockStore();
    store.dispatch(registerUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
