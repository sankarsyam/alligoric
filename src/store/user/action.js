import * as ActionTypes from '../actionTypes';
import { userLogin } from '../../services/login';
import { push } from 'react-router-redux';

const DEFAULT_ERROR_MESSAGE = 'Oops something went wrong!';

const authenticate = user => ({ type: ActionTypes.AUTHENTICATE, user });

export const logout = () => ({ type: ActionTypes.LOGOUT });

export function createErrorMessage(list = [DEFAULT_ERROR_MESSAGE]) {
  const message = { list, messageType: 'error' };

  return { type: ActionTypes.FLASH_MESSAGE__CREATE, message };
}

export function loginCheck(username, password) {
  try {
    const user = userLogin(username, password);
    return (dispatch, getState) => {
      dispatch(authenticate(user));
      dispatch(push(`/dashboard`));
    };
  } catch (error) {
    return (dispatch, getState) => {
      dispatch(createErrorMessage(error.messages));
      dispatch(push(`/login`));
    };
  }
}
