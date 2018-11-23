import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  UNREADEN_REQUESTED,
  UNREADEN_SUCCEEDED,
  UNREADEN_FAILED
} from '../actions/notificationsActions';

function* unreaden(action) {
  console.log('oi');
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

const saga = [
  takeEvery(UNREADEN_REQUESTED, unreaden)
];

export default saga;