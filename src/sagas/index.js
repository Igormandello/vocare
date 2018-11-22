import { all } from 'redux-saga/effects';
import usersSaga from './usersSaga';

function* watchAll() {
  yield all([
    ...usersSaga
  ]);
}

export default watchAll;