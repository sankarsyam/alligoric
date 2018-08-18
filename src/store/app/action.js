import { push } from 'react-router-redux';

import * as types from '../actionTypes';
import {
  createErrorMessage,
  createSuccessMessage,
} from '../flashMessages/action';
import { currentUserSuccess } from '../user/action';
import User from '../../services/user';

//=========================Helpers==============================================

function setSessionItem(item, value) {
  sessionStorage.setItem(item, value);
}

function getSessionItem(item) {
  return sessionStorage.getItem(item);
}

function removeSessionItem(item) {
  return sessionStorage.removeItem(item);
}

//======================Login===================================================

export function loginUser(creds) {
  return async dispatch => {
    dispatch(authRequest());

    try {
      const response = await User.login(creds);
      const { user, jwt } = response;
      console.dir(user);
      setSessionItem('jwt', jwt);
      dispatch(authSuccess());
      dispatch(currentUserSuccess(user));

      // const requestedUrl = getSessionItem('requestedUrl');
      // if (requestedUrl) {
      //   removeSessionItem('requestedUrl');
      //   return dispatch(push(requestedUrl));
      // };
      dispatch(push('/home'));
    } catch (error) {
      dispatch(authFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
}

export function authRequest() {
  return { type: types.AUTH__REQUEST };
}

export function authSuccess() {
  return { type: types.AUTH__SUCCESS };
}

export function authFailure() {
  return { type: types.AUTH__FAILURE };
}

//=====================ForgotPassword===========================================

export function forgotPassword(email) {
  return async dispatch => {
    dispatch(authRequest());

    try {
      await User.forgotPassword(email);
      dispatch(authSuccess());
      dispatch(
        createSuccessMessage([
          'Thanks! Check your email to reset your password!',
        ])
      );
      dispatch(push('/'));
    } catch (error) {
      if (!error.messages) {
        error.messages = ['Oops, we weren’t able to submit your request'];
      }
      dispatch(authFailure());
      dispatch(createErrorMessage([error.messages]));
    }
  };
}

//=====================Logout===================================================

export function logoutUser() {
  return dispatch => {
    dispatch(logoutRequest());
    try {
      removeSessionItem('jwt');
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFailure());
    }
  };
}

export function logoutRequest() {
  return { type: types.LOGOUT__REQUEST };
}

export function logoutSuccess() {
  return { type: types.LOGOUT__SUCCESS };
}

export function logoutFailure() {
  return { type: types.LOGOUT__FAILURE };
}
