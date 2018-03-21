import * as ActionTypes from '../actionTypes';
import { userLogin } from '../../services/login';
import { push } from 'react-router-redux';

const authenticate = user => ({ type: ActionTypes.AUTHENTICATE, user });

export const logout = () => ({ type: ActionTypes.LOGOUT });

export function loginCheck(username, password) {
  userLogin(username, password);
  return (dispatch, getState) => {
    dispatch(authenticate({ username, password }));
    dispatch(push(`/dashboard`));
  };
}
