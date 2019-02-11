import * as types from '../actions/Types';

export function menu(state = [], action) {
  switch (action.type) {
    case types.GET_MENU_SUCCESS:
      return action.menu;
    default:
      return state;
  }
}
