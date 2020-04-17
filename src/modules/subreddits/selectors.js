import { get } from 'lodash';
import { REDUCER_NAME } from './reducer';

export const getPositionX = (state, subreddit) =>
  get(state, [REDUCER_NAME, subreddit, 'positionX'], 0);
