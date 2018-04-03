import * as ActionTypes from '../actionTypes';
import { userLogin } from '../../services/login';
import { push } from 'react-router-redux';

const authenticate = user => ({ type: ActionTypes.AUTHENTICATE, user });

export const logout = () => ({ type: ActionTypes.LOGOUT });

export function loginCheck(username, password) {
  const user = userLogin(username, password);
  console.log(user);
  return (dispatch, getState) => {
    if (user) {
      dispatch(authenticate(user));
      dispatch(push(`/dashboard`));
    } else {
      dispatch(push(`/login`));
    }
  };
}
