import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED
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

function* logout() {
  try {
    let user = JSON.parse(localStorage.getItem('user'));
    let ok = yield call(Api.logout, user.id, user.access_token);
    if (!ok)
      throw ok;

    yield put({
      type: LOGOUT_SUCCEEDED
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILED
    });
  }
}

const saga = [
  takeEvery(LOGIN_REQUESTED, loginUser),
  takeEvery(LOGOUT_REQUESTED, logout)
];

export default saga;