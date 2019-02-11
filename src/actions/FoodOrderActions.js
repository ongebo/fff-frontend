import * as types from '../actions/Types';
import { toast } from 'react-toastify';

const API_URL = process.env.API_URL;

export function getFoodMenu(token) {
  return function(dispatch) {
    dispatch({ type: types.GET_MENU_REQUEST });
    return fetch(`${API_URL}/menu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      CORS: 'no-cors'
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          toast.error(data.error);
        } else if (data.menu) {
          dispatch({ type: types.GET_MENU_SUCCESS, menu: data.menu });
        } else {
          toast.error('Could not retrieve menu.');
          dispatch({ type: types.LOGOUT });
        }
      })
      .catch(error => {
        toast.error(error.toString());
        dispatch({ type: types.GET_MENU_FAILURE });
      });
  };
}

export function placeOrder(token, orderData) {
  return function(dispatch) {
    dispatch({ type: types.PLACE_ORDER_REQUEST });
    return fetch(`${API_URL}/users/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      CORS: 'no-cors',
      body: JSON.stringify(orderData)
    })
      .then(response => response.json())
      .then(data => {
        toast.success('Your order was successful.');
        dispatch({ type: types.PLACE_ORDER_SUCCESS });
      })
      .catch(error => toast.error(error.toString()));
  };
}
