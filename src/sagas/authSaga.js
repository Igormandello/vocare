import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  VERIFICATION_REQUESTED,
  VERIFICATION_SUCCEEDED,
  VERIFICATION_FAILED
} from '../actions/authActions';

function* loginUser(action) {
  try {
    const user = yield call(Api.loginUser, action.email, action.password);
    yield put({
      type: LOGIN_SUCCEEDED,
      user: user
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILED
    });
  }
}

function* logout(action) {
  try {
    yield call(Api.logout, action.id, action.access_token);
    yield put({
      type: LOGOUT_SUCCEEDED
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILED
    });
  }
}

function* verify(action) {
  try {
    console.log(action.id, action.access_token);
    const user = yield call(Api.verify, action.id, action.access_token);
    user.access_token = action.access_token;

    yield put({
      type: VERIFICATION_SUCCEEDED,
      user
    });
  } catch (e) {
    yield put({
      type: VERIFICATION_FAILED
    });
  }
}

const saga = [
  takeEvery(LOGIN_REQUESTED, loginUser),
  takeEvery(LOGOUT_REQUESTED, logout),
  takeEvery(VERIFICATION_REQUESTED, verify)
];

export default saga;