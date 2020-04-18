import { delay, put } from 'redux-saga/effects';
import { moveAll } from './actions';

function* animate() {
  // while (true) {
  //   yield delay(250);
  //   yield put(moveAll());
  // }
}

export { animate as saga };
