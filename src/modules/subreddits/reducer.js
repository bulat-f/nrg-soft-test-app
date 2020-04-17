import { reduce } from 'lodash';
import { ADD_ONE, MOVE_ALL, TOGGLE_PAUSE, RESIZE_CONTAINER } from './actionTypes';

export const REDUCER_NAME = 'SUBREDDITS';

const SPEED = 20;

const defaultValue = {
  positionX: 0,
  paused: false,
  dirrection: 1,
  selfWidth: 147,
  containerWidth: 1127,
  stepLength: 49,
};

const calcValue = ({
  positionX: currentPositionX,
  paused,
  dirrection: currentDirrection,
  selfWidth,
  containerWidth,
  stepLength,
}) => {
  const positionX = paused ? currentPositionX : currentPositionX + currentDirrection * stepLength;
  const dirrection =
    positionX + selfWidth >= containerWidth || positionX <= 0
      ? -1 * currentDirrection
      : currentDirrection;

  return { positionX, paused, dirrection, selfWidth, containerWidth, stepLength };
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ONE: {
      const { subreddit, containerWidth } = action.payload;
      return { ...state, [subreddit]: { ...defaultValue, containerWidth } };
    }
    case MOVE_ALL:
      return reduce(
        state,
        (acc, value, key) => ({
          ...acc,
          [key]: calcValue(value),
        }),
        {},
      );
    case TOGGLE_PAUSE: {
      const subreddit = state[action.payload.subreddit];
      return {
        ...state,
        [action.payload.subreddit]: { ...subreddit, paused: !subreddit.paused },
      };
    }
    case RESIZE_CONTAINER:
      return reduce(
        state,
        (acc, value, key) => ({
          ...acc,
          [key]: {
            ...value,
            containerWidth: action.payload.containerWidth,
            stepLength: (action.payload.containerWidth - value.selfWidth) / SPEED,
          },
        }),
        {},
      );
    default:
      return state;
  }
};
