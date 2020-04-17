import { all } from 'redux-saga/effects';
import { saga as postsSaga } from './posts/saga';
import { saga as subredditsSaga } from './subreddits/saga';

function* rootSaga() {
  yield all([postsSaga(), subredditsSaga()]);
}

export default rootSaga;
