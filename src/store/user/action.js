import * as ActionTypes from '../actionTypes';
import Login from '../../services/login';
import { push } from 'react-router-redux';
// import { browserHistory } from 'react-router';

const DEFAULT_ERROR_MESSAGE = 'Oops something went wrong!';

const authenticate = user => ({ type: ActionTypes.AUTHENTICATE, user });

export const logout = () => ({ type: ActionTypes.LOGOUT });

export function createErrorMessage(list = [DEFAULT_ERROR_MESSAGE]) {
  const message = { list, messageType: 'error' };

  return { type: ActionTypes.FLASH_MESSAGE__CREATE, message };
}

// export function loginCheck(username, password) {
//   try {

//     // setSessionItem('jwt', jwt);
//     // dispatch(authSuccess());
//     // dispatch(currentUserSuccess(user));

//     return async (dispatch) => {
//       const response =await Login.userLogin(username, password);
//     const { user, jwt } = response;
//       console.log('Useree kittiiiiiiiiiii');
//       console.dir(user);
//       dispatch(authenticate(user));
//       dispatch(push(`/home`));
//     };
//   } catch (error) {
//     return (dispatch, getState) => {
//       dispatch(createErrorMessage(error.messages));
//       dispatch(push(`/login`));
//     };
//   }
// }

export function loginCheck(username, password) {
  return async dispatch => {
    // dispatch(authRequest());

    try {
      const user = Login.userLogin(username, password);
      // const response = await Login.userLogin(username, password);
      // const { user, jwt } = response;
      // setSessionItem('jwt', jwt);
      // dispatch(authSuccess());
      // dispatch(currentUserSuccess(user));
      dispatch(authenticate(user));
      dispatch(push(`/home`));

      // const requestedUrl = getSessionItem('requestedUrl');
      // if (requestedUrl) {
      //   removeSessionItem('requestedUrl');
      //   return browserHistory.push(requestedUrl);
      // };
      // user.pmo? browserHistory.push(`/product-dashboard`): browserHistory.push(`/`);
    } catch (error) {
      dispatch(createErrorMessage(error.messages));
      dispatch(push(`/login`));
    }
  };
}
