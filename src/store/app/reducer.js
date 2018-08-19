import {
  AUTH__FAILURE,
  AUTH__REQUEST,
  AUTH__SUCCESS,
  CURRENT_USER__FAILURE,
  CURRENT_USER__REQUEST,
  CURRENT_USER__SUCCESS,
  FLASH_MESSAGE__CREATE,
  FLASH_MESSAGE__DELETE,
  LOGOUT__FAILURE,
  LOGOUT__REQUEST,
  LOGOUT__SUCCESS,
} from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  message: null,
  requesting: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case AUTH__FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        requesting: false,
      });
    case AUTH__REQUEST:
      return Object.assign({}, state, {
        requesting: true,
      });
    case AUTH__SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        requesting: false,
      });
    case CURRENT_USER__FAILURE:
      return Object.assign({}, state, {
        requesting: false,
      });
    case CURRENT_USER__REQUEST:
      return Object.assign({}, state, {
        requesting: true,
      });
    case FLASH_MESSAGE__CREATE:
      return Object.assign({}, state, {
        message: action.message,
      });
    case FLASH_MESSAGE__DELETE:
      return Object.assign({}, state, {
        message: null,
      });
    case LOGOUT__FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: true,
        requesting: false,
      });
    case LOGOUT__REQUEST:
      return Object.assign({}, state, {
        requesting: true,
      });
    case LOGOUT__SUCCESS:
      return Object.assign({}, state, {
        currentUser: null,
        isAuthenticated: false,
        requesting: false,
      });
    default:
      return state;
  }
}
