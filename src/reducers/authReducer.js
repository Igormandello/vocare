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

function auth(state = { error: false, logged: false, loading: false, user: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      localStorage.setItem('user', JSON.stringify({ 
        id: action.user.id,
        access_token: action.user.access_token 
      }));
      return {
        ...state,
        logged: true,
        loading: false,
        user: action.user
      };
    case LOGOUT_SUCCEEDED:
      localStorage.removeItem('user');
      return {
        ...state,
        logged: false,
        loading: false,
        user: null
      };
    case VERIFICATION_SUCCEEDED:
      return {
        ...state,
        logged: true,
        loading: false,
        user: action.user
      };
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case VERIFICATION_FAILED:
      return {
        error: true,
        user: null,
        logged: false,
        loading: false,
      }
    case LOGIN_REQUESTED:
    case LOGOUT_REQUESTED:
    case VERIFICATION_REQUESTED:
      return {
        ...state,
        error: false,
        loading: true
      }
    default:
      return state;
  }
}

export default auth;