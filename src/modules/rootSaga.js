import { all } from 'redux-saga/effects';
import { saga as articlesSaga } from './articles/saga';

function* rootSaga() {
  yield all([articlesSaga()]);
}

export default rootSaga;
