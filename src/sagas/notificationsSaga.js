import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  UNREADEN_REQUESTED,
  UNREADEN_SUCCEEDED,
  UNREADEN_FAILED,
  NOTIFICATIONS_REQUESTED,
  NOTIFICATIONS_SUCCEEDED,
  NOTIFICATIONS_FAILED,
  LOAD_MORE_SUCCEEDED
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

    let { min } = action;
    if (min) {
      min -= 10;

      let offset = 1;
      while (min > 0) {
        const notifications = yield call(Api.fetchNotifications, action.id, action.access_token, offset);
        yield put({
          type: LOAD_MORE_SUCCEEDED,
          notifications
        });

        min -= 10;
        offset++;
      }
    }
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