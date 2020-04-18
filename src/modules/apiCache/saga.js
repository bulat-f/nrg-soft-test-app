import { select, call, put, delay, takeEvery } from 'redux-saga/effects';
import { fetchPosts } from 'api';

import { SET_CACHE } from './actionTypes';
import { setCache, clearCache } from './actions';
import { getCache } from './selectors';

const LIFE_TIME = 2 * 60 * 1000;

function* clearCacheTimer({ payload: { subreddit } }) {
  yield delay(LIFE_TIME);
  yield put(clearCache(subreddit));
}

function* watchSettingCache() {
  yield takeEvery(SET_CACHE, clearCacheTimer);
}

export { watchSettingCache as saga };

export function* getData(subreddit) {
  const cache = yield select(getCache, subreddit);
  if (cache) return cache;

  const response = yield call(fetchPosts, subreddit);
  yield put(setCache(subreddit, response));

  return response;
}
