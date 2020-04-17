import { REDUCER_NAME } from './reducer';

export const getAllPosts = (state) =>
  state[REDUCER_NAME].allIds.map((id) => state[REDUCER_NAME].byId[id]);

export const getPost = (state, id) => state[REDUCER_NAME].byId[id];

export const getPostIsLoading = (state) => state[REDUCER_NAME].ui.isLoading;
