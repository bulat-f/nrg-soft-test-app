import { combineReducers } from 'redux';

import {
  REDUCER_NAME as ARTICELS_REDUCER_NAME,
  reducer as articlesReducer,
} from './articles/reducer';

const rootReducer = combineReducers({
  [ARTICELS_REDUCER_NAME]: articlesReducer,
});

export default rootReducer;
