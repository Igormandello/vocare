import { combineReducers } from 'redux';
import {
  USERS_FETCH_SUCCEEDED,
} from './actions';

function users(state = [], action) {
  switch (action.type) {
    case USERS_FETCH_SUCCEEDED:
      return action.users;
    default:
      return state;
  }
}

const reducer = combineReducers({
  users
});

export default reducer;