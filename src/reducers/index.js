import { combineReducers } from 'redux';
import auth from './authReducer';
import notifications from './notificationsReducer';

const reducer = combineReducers({
  auth,
  notifications
});

export default reducer;