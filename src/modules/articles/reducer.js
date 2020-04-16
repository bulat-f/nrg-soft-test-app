import { FETCH_SUCCESS } from './actionTypes';

export const REDUCER_NAME = 'ARTICLES';

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};
