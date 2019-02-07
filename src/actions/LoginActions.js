import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './Types';

const API_URL = process.env.API_URL;

export function loginUser(userData, history) {
  return function(dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    return fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      CORS: 'no-cors',
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          dispatch({
            type: LOGIN_FAILURE,
            errorType: 'validation',
            message: data.error
          });
        } else {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { isAdmin: data.admin, token: data.token }
          });
          history.push('/menu');
        }
      })
      .catch(error =>
        dispatch({
          type: LOGIN_FAILURE,
          errorType: 'network',
          message: error.toString()
        })
      );
  };
}
