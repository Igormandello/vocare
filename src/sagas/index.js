import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import notificationsSaga from './notificationsSaga';

function* watchAll() {
  yield all([
    ...authSaga,
    ...notificationsSaga
  ]);
}

export default watchAll;