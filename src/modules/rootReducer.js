import { combineReducers } from 'redux';

import { REDUCER_NAME as POSTS_REDUCER_NAME, reducer as postsReducer } from './posts/reducer';
import {
  REDUCER_NAME as SUBREDDITS_REDUCER_NAME,
  reducer as subredditsReducer,
} from './subreddits/reducer';

const rootReducer = combineReducers({
  [POSTS_REDUCER_NAME]: postsReducer,
  [SUBREDDITS_REDUCER_NAME]: subredditsReducer,
});

export default rootReducer;
