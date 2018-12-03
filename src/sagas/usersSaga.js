import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  PICTURE_EDIT_REQUESTED,
  PICTURE_EDIT_FAILED
} from '../actions/usersActions';

import {
  VERIFICATION_SUCCEEDED
} from '../actions/authActions';

function* editUserPicture(action) {
  try {
    const user = yield call(Api.editUserPicture, action.profile_picture, action.id, action.access_token);
    yield put({
      type: VERIFICATION_SUCCEEDED,
      user
    });
  } catch (e) {
    yield put({
      type: PICTURE_EDIT_FAILED
    });
  }
}

const saga = [
  takeEvery(PICTURE_EDIT_REQUESTED, editUserPicture),
];

export default saga;