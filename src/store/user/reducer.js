import createReducer from '../createReducer';
import * as ActionTypes from '../actionTypes';

const initialUserState = {
  isAuthenticated: false,
  loggedInUser: null,
};

export const user = createReducer(initialUserState, {
  [ActionTypes.AUTHENTICATE](state, action) {
    const loggedInUser = action.user;
    return { ...state, isAuthenticated: true, loggedInUser };
  },
  [ActionTypes.LOGOUT](state, action) {
    return { ...state, ...initialUserState };
  },
});

export default user;
