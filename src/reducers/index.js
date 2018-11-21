import { combineReducers } from 'redux';
import {
  USER_FETCH_SUCCEEDED,
} from './actions';

function users(state = [], action) {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return action.user
    default:
      return state;
  }
}

const reducer = combineReducers({
  users
});

export default reducer;