import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import notificationsSaga from './notificationsSaga';
import usersSaga from './usersSaga';
import postsSaga from './postsSaga';

function* watchAll() {
  yield all([
    ...authSaga,
    ...notificationsSaga,
    ...usersSaga,
    ...postsSaga
  ]);
}

export default watchAll;