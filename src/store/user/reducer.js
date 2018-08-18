import createReducer from '../createReducer';
import * as ActionTypes from '../actionTypes';

const initialUserState = {
  isAuthenticated: false,
  loggedInUser: null,
};

export const user = createReducer(initialUserState, {
  // [ActionTypes.AUTHENTICATE](state, action) {
  //   const loggedInUser = action.user;
  //   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  //   console.dir(loggedInUser);
  //   return { ...state, isAuthenticated: true, loggedInUser };
  // },
  // [ActionTypes.LOGOUT](state, action) {
  //   return { ...state, ...initialUserState };
  // },
  // [ActionTypes.FLASH_MESSAGE__CREATE](state, action) {
  //   return { ...state, message: action.message };
  // },
});

export default user;
