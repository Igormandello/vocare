import { combineReducers } from 'redux';
import users from './usersReducer';

const reducer = combineReducers({
  users
});

export default reducer;