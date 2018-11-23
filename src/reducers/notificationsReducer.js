import {
  UNREADEN_SUCCEEDED,
  UNREADEN_FAILED
} from '../actions/notificationsActions';

function notifications(state = { notifications: [], loaded: false, unreaden: 0, error: false }, action) {
  switch (action.type) {
    case UNREADEN_SUCCEEDED:
      return {
        ...state,
        unreaden: action.unreaden
      };
    case UNREADEN_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default notifications;