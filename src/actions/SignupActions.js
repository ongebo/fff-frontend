import * as types from './Types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = process.env.API_URL;

export function registerUser(userData, history) {
  return function(dispatch) {
    dispatch({ type: types.SIGNUP_REQUEST });
    return fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          dispatch({
            type: types.SIGNUP_FAILURE,
            errorType: 'validation',
            message: data.error
          });
        } else {
          toast.success(`${data.message} Please login to continue.`);
          dispatch({
            type: types.SIGNUP_SUCCESS,
            message: data.message
          });
          history.push('/login');
        }
      })
      .catch(err => {
        toast.error('There may be a problem with your connection.');
        dispatch({
          type: types.SIGNUP_FAILURE,
          errorType: 'network',
          message: err.toString()
        });
      });
  };
}
