import { takeEvery, put, call, all } from 'redux-saga/effects';
import Api from './api';
import {
  PICTURE_EDIT_REQUESTED,
  PICTURE_EDIT_FAILED,
  INFO_EDIT_REQUESTED,
  INFO_EDIT_SUCCEEDED,
  INFO_EDIT_FAILED,
  USERS_REQUESTED,
  USERS_SUCCEEDED,
  USERS_FAILED,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED,
  REGISTER_REQUESTED
} from '../actions/usersActions';

import {
  VERIFICATION_SUCCEEDED
} from '../actions/authActions';

function* editUserPicture(action) {
  try {
    const user = yield call(Api.editUserPicture, action.profile_picture, action.id, action.access_token);
    yield put ({
      type: VERIFICATION_SUCCEEDED,
      user
    })
  } catch (e) {
    yield put({
      type: PICTURE_EDIT_FAILED
    });
  }
}

function* editUserInfo(action) {
  try {
    const user = yield call(Api.editUserInfo, Object.assign(action.oldUser, action.newUser), action.id, action.access_token);
    yield all([
      put ({
        type: VERIFICATION_SUCCEEDED,
        user
      }), 
      put({
        type: INFO_EDIT_SUCCEEDED
      })
    ]);
  } catch (e) {
    yield put({
      type: INFO_EDIT_FAILED
    });
  }
}

function* fetchUsers(action) {
  try {
    const usersArr = yield all(action.ids.map(userId => call(Api.fetchUser, userId)));
    const usersMessages = yield all(action.ids.map(userId => call(Api.countUserMessages, userId)));
    const users = {};
    usersArr.map((user, i) => users[user.id] = { ...user, messages: usersMessages[i].count });

    yield put({
      type: USERS_SUCCEEDED,
      users
    });
  } catch (e) {
    yield put({
      type: USERS_FAILED
    });
  }
}

function* registerUser(action) {
  try {
    const newUser = yield call(Api.registerUser, action.username, action.email, action.password);

    yield put({
      type: REGISTER_SUCCEEDED
    });
    yield put({
      type: VERIFICATION_SUCCEEDED,
      user: newUser
    })
  } catch (e) {
    yield put({
      type: REGISTER_FAILED
    });
  }
}

const saga = [
  takeEvery(PICTURE_EDIT_REQUESTED, editUserPicture),
  takeEvery(INFO_EDIT_REQUESTED, editUserInfo),
  takeEvery(USERS_REQUESTED, fetchUsers),
  takeEvery(REGISTER_REQUESTED, registerUser)
];

export default saga;