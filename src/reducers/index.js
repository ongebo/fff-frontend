import { combineReducers } from 'redux';
import {
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage
} from './SignupReducers';
import authentication from './LoginReducers';
import { menu } from './FoodOrderReducers';

const rootReducer = combineReducers({
  authentication,
  isRequesting,
  noNetwork,
  invalidRegistrationData,
  signupError,
  successMessage,
  menu
});

export default rootReducer;
