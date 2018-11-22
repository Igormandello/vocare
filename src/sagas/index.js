import { all } from 'redux-saga/effects';
import authSaga from './authSaga';

function* watchAll() {
  yield all([
    ...authSaga
  ]);
}

export default watchAll;