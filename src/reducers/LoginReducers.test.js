import {
  isAuthenticated,
  isAdmin,
  networkError,
  invalidLoginData,
  loginErrors,
  token
} from './LoginReducers';
import * as types from '../actions/Types';

describe('isAuthenticated() reducer', () => {
  it('returns true incase of a LOGIN_SUCCESS action', () => {
    expect(isAuthenticated(undefined, { type: types.LOGIN_SUCCESS })).toBe(
      true
    );
  });

  it('returns false when state is undefined', () => {
    expect(isAuthenticated(undefined, { type: '' })).toBe(false);
  });
});

describe('isAdmin() reducer', () => {
  it('returns true incase an admin logs in', () => {
    expect(
      isAdmin(undefined, {
        type: types.LOGIN_SUCCESS,
        payload: { isAdmin: true }
      })
    ).toBe(true);
  });

  it('returns previous state for a non-admin login action', () => {
    expect(
      isAdmin(false, {
        type: types.LOGIN_REQUEST
      })
    ).toBe(false);
  });
});

describe('networkError() reducer', () => {
  it('returns true in case of a network problem', () => {
    expect(
      networkError(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'network'
      })
    ).toBe(true);
  });

  it('returns false for a validation LOGIN_FAILURE', () => {
    expect(
      networkError(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'validation'
      })
    ).toBe(false);
  });

  it('returns false for a non-LOGIN_FAILURE', () => {
    expect(
      networkError(undefined, {
        type: types.LOGIN_REQUEST
      })
    ).toBe(false);
  });
});

describe('invalidLoginData() reducer', () => {
  it('returns true in case of a validation problem', () => {
    expect(
      invalidLoginData(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'validation'
      })
    ).toBe(true);
  });

  it('returns false for a networkError LOGIN_FAILURE', () => {
    expect(
      invalidLoginData(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'network'
      })
    ).toBe(false);
  });

  it('returns false for a non-LOGIN_FAILURE', () => {
    expect(
      invalidLoginData(undefined, {
        type: types.LOGIN_REQUEST
      })
    ).toBe(false);
  });
});

describe('loginErrors() reducer', () => {
  it('indicates username error when due to invalid username', () => {
    expect(
      loginErrors(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'validation',
        message: '<Username> already exists!'
      })
    ).toEqual({ username: '<Username> already exists!', password: '' });
  });

  it('indicates password error when due to invalid password', () => {
    expect(
      loginErrors(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'validation',
        message: 'Wrong password.'
      })
    ).toEqual({ username: '', password: 'Wrong password.' });
  });

  it('indicates no validation errors due to network failure', () => {
    expect(
      loginErrors(undefined, {
        type: types.LOGIN_FAILURE,
        errorType: 'network'
      })
    ).toEqual({ username: '', password: '' });
  });

  it('indicates no validation errors for non-LOGIN_FAILURE errors', () => {
    expect(
      loginErrors(undefined, {
        type: types.LOGIN_SUCCESS
      })
    ).toEqual({ username: '', password: '' });
  });
});

describe('token() reducer', () => {
  it('returns token upon successful login', () => {
    expect(
      token(undefined, {
        type: types.LOGIN_SUCCESS,
        payload: { token: 'token' }
      })
    ).toEqual('token');
  });

  it('returns same token when there is no successful login', () => {
    expect(token('current token', {})).toEqual('current token');
  });
});
