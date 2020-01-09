import produce from 'immer';
import {
  FETCH_SUBJECT_SUCCESS,
  FETCH_SUBJECT_FAILURE,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const groupReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_SUBJECT_SUCCESS:
        return { ...state, subjects: action.payload };
      case FETCH_SUBJECT_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  });

export default groupReducer;
