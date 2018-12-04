import {
  USERS_SUCCEEDED
} from '../actions/usersActions';

function users(state = {}, action) {
  switch (action.type) {
    case USERS_SUCCEEDED:
      return Object.assign(state, action.users);
    default:
      return state;
  }
}

export default users;