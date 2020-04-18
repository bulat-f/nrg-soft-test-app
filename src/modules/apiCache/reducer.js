import { omit } from 'lodash';
import { SET_CACHE, CLEAR_CACHE } from './actionTypes';

export const REDUCER_NAME = 'API_CACHE';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CACHE:
      return { ...state, [action.payload.subreddit]: action.payload.response };
    case CLEAR_CACHE:
      return omit(state, action.payload.subreddit);
    default:
      return state;
  }
};
