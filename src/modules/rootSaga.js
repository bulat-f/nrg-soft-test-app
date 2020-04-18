import { all } from 'redux-saga/effects';
import { saga as postsSaga } from './posts/saga';
import { saga as apiCacheSaga } from './apiCache/saga';

function* rootSaga() {
  yield all([postsSaga(), apiCacheSaga()]);
}

export default rootSaga;
