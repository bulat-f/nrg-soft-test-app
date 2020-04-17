import { ADD_ONE, MOVE_ALL, TOGGLE_PAUSE, RESIZE_CONTAINER } from './actionTypes';

export const addOne = (subreddit, containerWidth) => ({
  type: ADD_ONE,
  payload: { subreddit, containerWidth },
});

export const moveAll = () => ({ type: MOVE_ALL });

export const togglePause = (subreddit) => ({ type: TOGGLE_PAUSE, payload: { subreddit } });

export const resizeContainer = (containerWidth) => ({
  type: RESIZE_CONTAINER,
  payload: { containerWidth },
});
