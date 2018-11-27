import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  VERIFICATION_REQUESTED,
  VERIFICATION_SUCCEEDED,
  VERIFICATION_FAILED,
} from '../actions/authActions';

function auth(state = { error: false, logged: false, user: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      localStorage.setItem('user', JSON.stringify({ 
        id: action.user.id,
        access_token: action.user.access_token 
      }));
      return {
        error: false,
        logged: true,
        user: action.user
      };
    case LOGOUT_SUCCEEDED:
      localStorage.removeItem('user');
      return {
        error: false,
        logged: false,
        user: null
      };
    case VERIFICATION_SUCCEEDED:
      console.log(state, action.user);
      return {
        ...state,
        logged: true,
        user: action.user
      };
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
      return {
        ...state,
        error: true
      };
    case VERIFICATION_FAILED:
      return {
        error: true,
        user: null,
        logged: false
      }
    case LOGIN_REQUESTED:
    case LOGOUT_REQUESTED:
    case VERIFICATION_REQUESTED:
    default:
      return state;
  }
}

export default auth;