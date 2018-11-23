import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED
} from '../actions/authActions';

function auth(state = { error: false, logged: false, user: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        error: false,
        logged: true,
        user: action.user
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
        logged: false,
        user: null
      };
    case LOGIN_REQUESTED:
    case LOGOUT_REQUESTED:
      return state;
    default:
      let user;
      try {
        user = JSON.parse(localStorage.getItem('user'));
      } catch (e) {
        user = null;
      }

      return {
        ...state,
        logged: user != null,
        user: user
      };
  }
}

export default auth;