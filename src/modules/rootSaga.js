import { all } from 'redux-saga/effects';
import { saga as postsSaga } from './posts/saga';

function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootSaga;
