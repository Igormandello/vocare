import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED
} from '../actions/authActions';

function auth(state = { error: false, logged: false }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        error: false,
        logged: true
      };
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
      return {
        ...state,
        error: true
      };
    case LOGOUT_SUCCEEDED:
      localStorage.removeItem('user');
      return {
        error: false,
        logged: false
      };
    case LOGIN_REQUESTED:
    case LOGOUT_REQUESTED:
      return state;
    default:
      return {
        ...state,
        logged: localStorage.getItem('user') != null
      };
  }
}

export default auth;