import { combineReducers } from 'redux';
import { LOGIN_SUCCEEDED, LOGIN_FAILED, LOGIN_REQUESTED } from '../actions/authActions';

function login(state = { error: false, logged: false, user: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      localStorage.setItem('user', action.user);
      return {
        ...state,
        logged: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: true
      };
    case LOGIN_REQUESTED:
      return state;
    default:
      return {
        ...state,
        logged: localStorage.getItem('user') != null
      };
  }
}

export default combineReducers({
  login
});