import { combineReducers } from 'redux';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export const REDUCER_NAME = 'ARTICLES';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...state, action.payload.id];
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

export const reducer = combineReducers({ byId, allIds, ui });
