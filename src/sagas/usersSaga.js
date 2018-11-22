import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCEEDED, USERS_FETCH_FAILED } from '../actions/usersActions';

function* fetchUser(action) {
  try {
    console.log(action);
    const users = yield call(Api.fetchUser, action.userId);
    yield put({
      type: USERS_FETCH_SUCCEEDED,
      users: users
    });
  } catch (e) {
    yield put({
      type: USERS_FETCH_FAILED,
      message: e.message
    });
  }
}

function* saga() {
  yield takeEvery(USERS_FETCH_REQUESTED, fetchUser);
}

export default saga;