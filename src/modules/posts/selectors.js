import { get } from 'lodash';
import { REDUCER_NAME } from './reducer';

const getAllIds = (state) => get(state, [REDUCER_NAME, 'allIds', 'present']);
const getById = (state) => get(state, [REDUCER_NAME, 'byId', 'present']);

const getLike = (state, id) => get(state, [REDUCER_NAME, 'likes', id], false);

export const getPost = (state, id) => {
  const post = getById(state)[id];
  if (post) {
    return { ...getById(state)[id], liked: getLike(state, id) };
  }

  return null;
};

export const getAllPosts = (state) => getAllIds(state).map((id) => getPost(state, id));

export const getPostIsLoading = (state) => state[REDUCER_NAME].ui.isLoading;

export const getIsUndoable = (state) => get(state, [REDUCER_NAME, 'byId', 'past', 'length'], 0) > 0;

export const getIsRedoable = (state) =>
  get(state, [REDUCER_NAME, 'byId', 'future', 'length'], 0) > 0;
