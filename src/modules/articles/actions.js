import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export const fetchArticleRequest = (subreddit) => ({ type: FETCH_REQUEST, payload: { subreddit } });

export const fetchArticleSuccess = (article) => ({ type: FETCH_SUCCESS, payload: article });

export const fetchArticleFailure = (error) => ({ type: FETCH_FAILURE, payload: error });
