import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_GRADES_REQUEST,
  FETCH_GRADES_SUCCESS,
  FETCH_GRADES_FAILURE,
  CREATE_GRADE_REQUEST,
  CREATE_GRADE_SUCCESS,
  CREATE_GRADE_FAILURE,
} from './constants';

import { GradesService } from '../../services/gradesService';


const gradesService = new GradesService();

function* fetchGrades() {
  try {
    const { payload: grades } = yield call(() => gradesService.fetchGrades());

    yield put({ type: FETCH_GRADES_SUCCESS, payload: grades });
  } catch (error) {
    yield put({ type: FETCH_GRADES_FAILURE, payload: error.message });
  }
}

function* createGrade({username, classId, date, grade}) {
  try {
    const { payload } = yield call(() => gradesService.createGrade({username, classId, date, grade}));

    yield put({ type: CREATE_GRADE_SUCCESS, payload: grade });
  } catch (error) {

    yield put({ type: CREATE_GRADE_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* gradesSaga() {
  yield takeLatest(FETCH_GRADES_REQUEST, fetchGrades);
  yield takeLatest(CREATE_GRADE_REQUEST, createGrade);
}
