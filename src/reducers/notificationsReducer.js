import {
  UNREADEN_SUCCEEDED,
  UNREADEN_FAILED,
  NOTIFICATIONS_SUCCEEDED,
  NOTIFICATIONS_FAILED
} from '../actions/notificationsActions';

function notifications(state = { notifications: [], loaded: false, unreaden: 0, error: false }, action) {
  switch (action.type) {
    case UNREADEN_SUCCEEDED:
      return {
        ...state,
        unreaden: action.unreaden
      };
    case NOTIFICATIONS_SUCCEEDED:
      return {
        ...state,
        loaded: true,
        notifications: action.notifications
      };
    case UNREADEN_FAILED:
    case NOTIFICATIONS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default notifications;