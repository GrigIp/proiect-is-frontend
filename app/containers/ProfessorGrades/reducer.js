import produce from 'immer';
import {
  FETCH_GRADES_SUCCESS,
  FETCH_GRADES_FAILURE,
  CREATE_GRADE_FAILURE,
  CREATE_GRADE_SUCCESS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const gradesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_GRADES_SUCCESS:
        return { ...state, grades: action.payload };
      case CREATE_GRADE_SUCCESS:
        return { ...state, grade: action.payload };
      case FETCH_GRADES_FAILURE:
      case CREATE_GRADE_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  });

export default gradesReducer;
