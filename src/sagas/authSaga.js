import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED
} from '../actions/authActions';

function* loginUser(action) {
  try {
    const user = yield call(Api.loginUser, action.email, action.password);
    if (user)
      yield put({
        type: LOGIN_SUCCEEDED,
        user: user
      });
    else
      throw user;
  } catch (e) {
    yield put({
      type: LOGIN_FAILED
    });
  }
}

const saga = [
  takeEvery(LOGIN_REQUESTED, loginUser)
];

export default saga;