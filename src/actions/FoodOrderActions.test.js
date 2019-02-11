import * as types from './Types';
import { getFoodMenu, placeOrder } from './FoodOrderActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_URL = process.env.API_URL;

describe('getFoodMenu() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches GET_MENU_SUCCESS after retrieving menu', () => {
    fetchMock.getOnce(`${API_URL}/menu`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: { menu: [] }
    });
    const store = mockStore();
    const expectedActions = [
      { type: types.GET_MENU_REQUEST },
      { type: types.GET_MENU_SUCCESS, menu: [] }
    ];
    store
      .dispatch(getFoodMenu('mock-token'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('dispatches GET_MENU_FAILURE incase of an exception', () => {
    fetchMock.getOnce(`${API_URL}/menu`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const store = mockStore();
    const expectedActions = [
      { type: types.GET_MENU_REQUEST },
      { type: types.GET_MENU_FAILURE }
    ];
    store
      .dispatch(getFoodMenu('mock-token'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
