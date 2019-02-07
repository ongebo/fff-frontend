import * as types from '../actions/Types';
import { combineReducers } from 'redux';

export function isAuthenticated(state = false, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
}

export function isAdmin(state = false, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload.isAdmin;
    default:
      return state;
  }
}

export function networkError(state, action) {
  switch (action.type) {
    case types.LOGIN_FAILURE:
      return action.errorType === 'network' ? true : false;
    default:
      return false;
  }
}

export function invalidLoginData(state, action) {
  switch (action.type) {
    case types.LOGIN_FAILURE:
      return action.errorType === 'validation' ? true : false;
    default:
      return false;
  }
}

export function loginErrors(state, action) {
  switch (action.type) {
    case types.LOGIN_FAILURE:
      if (action.errorType === 'validation') {
        const isNameError = action.message.includes('exists!') ? true : false;
        return isNameError
          ? Object.assign({}, { password: '', username: action.message })
          : Object.assign({}, { username: '', password: action.message });
      } else {
        return { username: '', password: '' };
      }
    default:
      return { username: '', password: '' };
  }
}

export function token(state = localStorage.getItem('token'), action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload.token;
    default:
      return state;
  }
}

const authentication = combineReducers({
  isAuthenticated,
  isAdmin,
  networkError,
  invalidLoginData,
  loginErrors,
  token
});

export default authentication;
