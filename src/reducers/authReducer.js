import { combineReducers } from 'redux';
import { LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/authActions';

function login(state = { error: false, logged: false, user: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        logged: true,
        user: action.user
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default combineReducers({
  login
});