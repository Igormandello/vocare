import { USERS_FETCH_SUCCEEDED } from '../actions/usersActions';

export default function users(state = [], action) {
  switch (action.type) {
    case USERS_FETCH_SUCCEEDED:
      return action.users;
    default:
      return state;
  }
}