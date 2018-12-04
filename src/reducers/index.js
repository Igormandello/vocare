import { combineReducers } from 'redux';
import auth from './authReducer';
import notifications from './notificationsReducer';
import posts from './postsReducer';
import users from './usersReducer';

const reducer = combineReducers({
  auth,
  notifications,
  posts,
  users
});

export default reducer;