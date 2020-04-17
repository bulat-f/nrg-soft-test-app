import { combineReducers } from 'redux';

import {
  REDUCER_NAME as POSTS_REDUCER_NAME,
  reducer as postsReducer,
} from './posts/reducer';

const rootReducer = combineReducers({
  [POSTS_REDUCER_NAME]: postsReducer,
});

export default rootReducer;
