import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import { USERS_FETCH_REQUESTED, USERS_FETCH_SUCCEEDED, USERS_FETCH_FAILED } from '../actions/usersActions';

function* fetchUsers(action) {
  try {
    console.log(action);
    const users = yield call(Api.fetchUsers, action.userId);
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

const saga = [
  takeEvery(USERS_FETCH_REQUESTED, fetchUsers)
];

export default saga;