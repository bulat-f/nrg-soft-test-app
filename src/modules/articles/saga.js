import { takeEvery, call, put, select } from 'redux-saga/effects';
import { random } from 'lodash';
import { fetchArticles } from 'api';
import { FETCH_REQUEST } from './actionTypes';
import { fetchArticleSuccess, fetchArticleFailure } from './actions';
import { getArticle } from './selectors';

function* handleArticleRequest({ payload: { subreddit } }) {
  try {
    const {
      data: { dist, children },
    } = yield call(fetchArticles, subreddit);
    const { data } = children[random(dist - 1)];
    const article = yield select(getArticle, data.id);
    if (Boolean(article)) throw new Error('Duplication');
    yield put(fetchArticleSuccess(data));
  } catch (error) {
    yield put(fetchArticleFailure(error));
  }
}

function* watchArticleRequest() {
  yield takeEvery(FETCH_REQUEST, handleArticleRequest);
}

export { watchArticleRequest as saga };
