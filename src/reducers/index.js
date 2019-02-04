import { combineReducers } from 'redux';
import {
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage
} from './SignupReducers';

const rootReducer = combineReducers({
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage
});

export default rootReducer;
