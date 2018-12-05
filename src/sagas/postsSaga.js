import { takeEvery, put, call } from 'redux-saga/effects';
import Api from './api';
import {
  POSTS_REQUESTED,
  POSTS_SUCCEEDED,
  POSTS_FAILED,
  //LOAD_MORE_REQUESTED,
  //LOAD_MORE_SUCCEEDED,
  //LOAD_MORE_FAILED,
  VIEW_POST_REQUESTED,
  VIEW_POST_SUCCEEDED,
  VIEW_POST_FAILED
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

function* loadPost(action) {
  try {
    const post = yield call(Api.loadPost, action.id, action.access_token);
    const comments = yield call(Api.loadComments, action.id, action.access_token);
    
    yield put({
      type: VIEW_POST_SUCCEEDED,
      post,
      comments
    });
  } catch (e) {
    yield put({
      type: VIEW_POST_FAILED
    });
  }
}

const saga = [
  takeEvery(POSTS_REQUESTED, fetchPosts),
  takeEvery(VIEW_POST_REQUESTED, loadPost)
];

export default saga;