import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import { omit } from 'lodash';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, REMOVE, LIKE } from './actionTypes';

export const REDUCER_NAME = 'POSTS';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE:
      return omit(state, action.payload.id);
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...state, action.payload.id];
    case REMOVE: {
      const index = state.findIndex((elem) => elem === action.payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};

const likes = (state = {}, action) => {
  switch (action.type) {
    case LIKE: {
      const prevState = state[action.payload.id];
      return { ...state, [action.payload.id]: !prevState };
    }
    default:
      return state;
  }
};

const ui = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
    case FETCH_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const undoConfig = { limit: 10 };

export const reducer = combineReducers({
  byId: undoable(byId, undoConfig),
  allIds: undoable(allIds, undoConfig),
  likes,
  ui,
});
