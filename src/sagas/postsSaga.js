import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  POSTS_REQUESTED,
  POSTS_SUCCEEDED,
  POSTS_FAILED,
  //LOAD_MORE_REQUESTED,
  //LOAD_MORE_SUCCEEDED,
  //LOAD_MORE_FAILED
} from '../actions/postsActions';

function* fetchPosts(action) {
  try {
    const posts = yield call(Api.fetchPosts);
    yield put({
      type: POSTS_SUCCEEDED,
      posts
    });
  } catch (e) {
    yield put({
      type: POSTS_FAILED
    });
  }
}

const saga = [
  takeEvery(POSTS_REQUESTED, fetchPosts)
];

export default saga;