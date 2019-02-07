import * as types from '../actions/Types';

export function isRequesting(state, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.LOGIN_REQUEST:
      return true;
    default:
      return false;
  }
}

export function noNetwork(state, action) {
  switch (action.type) {
    case types.SIGNUP_FAILURE:
      if (action.errorType === 'network') {
        return true;
      }
      return false;
    default:
      return false;
  }
}

export function invalidRegistrationData(state, action) {
  switch (action.type) {
    case types.SIGNUP_FAILURE:
      if (action.errorType === 'validation') {
        return true;
      }
      return false;
    default:
      return false;
  }
}

export function signupError(state, action) {
  switch (action.type) {
    case types.SIGNUP_FAILURE:
      return action.message;
    default:
      return '';
  }
}

export function successMessage(state, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return action.message;
    default:
      return '';
  }
}
