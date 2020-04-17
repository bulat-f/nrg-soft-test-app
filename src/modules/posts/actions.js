import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, REMOVE, LIKE } from './actionTypes';

export const fetchPostRequest = (subreddit) => ({ type: FETCH_REQUEST, payload: { subreddit } });

export const fetchPostSuccess = (post) => ({ type: FETCH_SUCCESS, payload: post });

export const fetchPostFailure = (error) => ({ type: FETCH_FAILURE, payload: error });

export const removePost = (id) => ({ type: REMOVE, payload: { id } });

export const likePost = (id) => ({ type: LIKE, payload: { id } });
