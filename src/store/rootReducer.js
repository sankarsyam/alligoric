import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { loginReducer } from 'react-redux-modules/lib/reducers/loginReducer';
import app from './app/reducer';
import user from './user/reducer';

const root = combineReducers({
  router: routerReducer,
  app,
  user,
  // ...loginReducer('loginForm'),
});

export default root;
