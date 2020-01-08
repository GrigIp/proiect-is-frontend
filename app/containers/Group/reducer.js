import produce from 'immer';
import {
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const groupReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_GROUP_SUCCESS:
        const students = action.payload.students;
        delete action.payload.students;

        return { ...state, group: action.payload, students };
      case FETCH_GROUP_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  });

export default groupReducer;
