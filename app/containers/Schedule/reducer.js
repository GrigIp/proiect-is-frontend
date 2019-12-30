import produce from 'immer';
import {
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const scheduleReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_SCHEDULE_SUCCESS:
        return { ...state, schedule: action.payload };
      case FETCH_SCHEDULE_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  });

export default scheduleReducer;
