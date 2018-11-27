import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  UNREADEN_REQUESTED,
  UNREADEN_SUCCEEDED,
  UNREADEN_FAILED,
  NOTIFICATIONS_REQUESTED,
  NOTIFICATIONS_SUCCEEDED,
  NOTIFICATIONS_FAILED
} from '../actions/notificationsActions';

function* unreaden(action) {
  try {
    const unreaden = yield call(Api.unreaden, action.id, action.access_token);
    yield put({
      type: UNREADEN_SUCCEEDED,
      unreaden: unreaden.amount
    });
  } catch (e) {
    yield put({
      type: UNREADEN_FAILED
    });
  }
}

function* fetchNotifications(action) {
  try {
    const notifications = yield call(Api.fetchNotifications, action.id, action.access_token);
    yield put({
      type: NOTIFICATIONS_SUCCEEDED,
      notifications
    });
  } catch (e) {
    yield put({
      type: NOTIFICATIONS_FAILED
    });
  }

  yield unreaden(action);
}

const saga = [
  takeEvery(UNREADEN_REQUESTED, unreaden),
  takeEvery(NOTIFICATIONS_REQUESTED, fetchNotifications)
];

export default saga;