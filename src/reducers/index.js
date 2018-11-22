import { combineReducers } from 'redux';
import auth from './authReducer';

const reducer = combineReducers({
  auth
});

export default reducer;