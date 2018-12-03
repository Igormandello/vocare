import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import notificationsSaga from './notificationsSaga';
import usersSaga from './usersSaga';

function* watchAll() {
  yield all([
    ...authSaga,
    ...notificationsSaga,
    ...usersSaga
  ]);
}

export default watchAll;