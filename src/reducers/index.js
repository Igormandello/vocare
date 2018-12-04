import { combineReducers } from 'redux';
import auth from './authReducer';
import notifications from './notificationsReducer';
import posts from './postsReducer';

const reducer = combineReducers({
  auth,
  notifications,
  posts
});

export default reducer;