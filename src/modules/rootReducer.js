import { combineReducers } from 'redux';

import { REDUCER_NAME as POSTS_REDUCER_NAME, reducer as postsReducer } from './posts/reducer';
import {
  REDUCER_NAME as API_CACHE_REDUCER_NAME,
  reducer as apiCacheReducer,
} from './apiCache/reducer';

const rootReducer = combineReducers({
  [POSTS_REDUCER_NAME]: postsReducer,
  [API_CACHE_REDUCER_NAME]: apiCacheReducer,
});

export default rootReducer;
