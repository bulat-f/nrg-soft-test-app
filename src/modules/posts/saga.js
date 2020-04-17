import { takeEvery, call, put, select } from 'redux-saga/effects';
import { random } from 'lodash';
import { fetchPosts } from 'api';
import { FETCH_REQUEST } from './actionTypes';
import { fetchPostSuccess, fetchPostFailure } from './actions';
import { getPost } from './selectors';

function* handlePostRequest({ payload: { subreddit } }) {
  try {
    const {
      data: { dist, children },
    } = yield call(fetchPosts, subreddit);
    const { data } = children[random(dist - 1)];
    const article = yield select(getPost, data.id);
    if (Boolean(article)) throw new Error('Duplication');
    yield put(fetchPostSuccess(data));
  } catch (error) {
    yield put(fetchPostFailure(error));
  }
}

function* watchPostRequest() {
  yield takeEvery(FETCH_REQUEST, handlePostRequest);
}

export { watchPostRequest as saga };
