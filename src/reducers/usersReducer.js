import {
  INFO_EDIT_REQUESTED,
  INFO_EDIT_SUCCEEDED,
  INFO_EDIT_FAILED,
  USERS_SUCCEEDED,
  REGISTER_REQUESTED,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED
} from '../actions/usersActions';

function users(state = { users: {}, loading: false, loaded: false, error: false }, action) {
  switch (action.type) {
    case INFO_EDIT_REQUESTED:
    case REGISTER_REQUESTED:
      return {
        ...state,
        loaded: false,
        loading: true,
        error: false
      }
    case INFO_EDIT_SUCCEEDED:
    case REGISTER_SUCCEEDED:
      return {
        ...state,
        loaded: true,
        loading: false
      }
    case INFO_EDIT_FAILED:
    case REGISTER_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      }
    case USERS_SUCCEEDED:
      return {
        ...state,
        users: {
          ...state.users,
          ...action.users,
        }
      }
    default:
      return state;
  }
}

export default users;