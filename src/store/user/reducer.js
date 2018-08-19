import { CURRENT_USER__SUCCESS } from '../actionTypes';

const initialState = {
  loggedInUser: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER__SUCCESS:
      console.log('action.user');
      console.dir(action.user);
      return Object.assign({}, state, {
        loggedInUser: action.user,
      });
    default:
      return state;
  }
}
