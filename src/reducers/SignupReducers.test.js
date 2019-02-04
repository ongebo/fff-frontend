import {
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage
} from './SignupReducers';
import * as types from '../actions/Types';

describe('isRequesting() reducer', () => {
  it('returns true given a SIGNUP_REQUEST action', () => {
    expect(isRequesting(undefined, { type: types.SIGNUP_REQUEST })).toBe(true);
  });

  it('returns false given a non-SIGNUP_REQUEST action', () => {
    expect(isRequesting(undefined, { type: types.SIGNUP_SUCCESS })).toBe(false);
  });
});

describe('noNetwork() reducer', () => {
  it('returns true given a network failure action', () => {
    expect(
      noNetwork(undefined, { type: types.SIGNUP_FAILURE, errorType: 'network' })
    ).toBe(true);
  });

  it('returns false for a non-network failure', () => {
    expect(
      noNetwork(undefined, {
        type: types.SIGNUP_FAILURE,
        errorType: 'validation'
      })
    ).toBe(false);
  });

  it('returns false for a non-SIGNUP_FAILURE action', () => {
    expect(
      noNetwork(undefined, {
        type: types.SIGNUP_REQUEST
      })
    ).toBe(false);
  });
});

describe('invalidRegistrationData() reducer', () => {
  it('returns true for a validation error', () => {
    expect(
      invalidRegistrationData(undefined, {
        type: types.SIGNUP_FAILURE,
        errorType: 'validation'
      })
    ).toBe(true);
  });

  it('returns false given a non-validation error', () => {
    expect(
      invalidRegistrationData(undefined, {
        type: types.SIGNUP_FAILURE,
        errorType: 'network'
      })
    ).toBe(false);
  });

  it('returns false for a non-SIGNUP_FAILURE action', () => {
    expect(
      invalidRegistrationData(undefined, {
        type: types.SIGNUP_SUCCESS
      })
    ).toBe(false);
  });
});

describe('signupError() reducer', () => {
  it('returns a message given a SIGNUP_FAILURE action', () => {
    expect(
      signupError(undefined, {
        type: types.SIGNUP_FAILURE,
        message: 'There is a problem with your connection.'
      })
    ).toBe('There is a problem with your connection.');
  });

  it('returns an empty string given a non-SIGNUP_FAILURE action', () => {
    expect(signupError(undefined, { type: types.SIGNUP_SUCCESS })).toBe('');
  });
});

describe('successMessage() reducer', () => {
  it('returns a message given a SIGNUP_SUCCESS action', () => {
    expect(
      successMessage(undefined, {
        type: types.SIGNUP_SUCCESS,
        message: 'You were successfully registered.'
      })
    ).toBe('You were successfully registered.');
  });

  it('returns an empty string given a non-SIGNUP_SUCCESS action', () => {
    expect(successMessage(undefined, { type: types.SIGNUP_FAILURE })).toBe('');
  });
});
