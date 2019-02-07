import { combineReducers } from 'redux';
import {
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage
} from './SignupReducers';
import authentication from './LoginReducers';

const rootReducer = combineReducers({
  authentication,
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage
});

export default rootReducer;
