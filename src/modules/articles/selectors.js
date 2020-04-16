import { REDUCER_NAME } from './reducer';

export const getAllArticles = (state) =>
  state[REDUCER_NAME].allIds.map((id) => state[REDUCER_NAME].byId[id]);

export const getArticle = (state, id) => state[REDUCER_NAME].byId[id];

export const getArticleIsLoading = (state) => state[REDUCER_NAME].ui.isLoading;
