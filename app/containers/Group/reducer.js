import produce from 'immer';
import {
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const groupsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_STUDENTS_SUCCESS:
        return { ...state, students: action.payload };
      case FETCH_GROUP_SUCCESS:
        return { ...state, group: action.payload };
      case FETCH_GROUP_FAILURE:
      case FETCH_STUDENTS_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  });

export default groupReducer;
