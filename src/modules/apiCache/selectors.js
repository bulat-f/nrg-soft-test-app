import { get } from 'lodash';
import { REDUCER_NAME } from './reducer';

export const getCache = (state, subreddit) => get(state, [REDUCER_NAME, subreddit]);
