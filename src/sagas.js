import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const Api = {
  fetchUser: (id) => {
    if (id && Number.isInteger(id) && id > 0)
      return fetch('http://localhost:8080/api/users/' + id).then(res => res.json());

    return fetch('http://localhost:8080/api/users/').then(res => res.json());
  }
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
     console.log(action);
      const user = yield call(Api.fetchUser, action.userId);
      yield put({type: 'USER_FETCH_SUCCEEDED', user: user});
   } catch (e) {
      yield put({type: 'USER_FETCH_FAILED', message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;