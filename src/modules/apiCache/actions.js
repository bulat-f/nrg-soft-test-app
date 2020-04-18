import { SET_CACHE, CLEAR_CACHE } from './actionTypes';

export const setCache = (subreddit, response) => ({ type: SET_CACHE, payload: { subreddit, response } });

export const clearCache = (subreddit) => ({ type: CLEAR_CACHE, payload: { subreddit } });
