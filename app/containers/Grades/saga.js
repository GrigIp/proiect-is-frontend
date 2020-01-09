import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_GRADES_REQUEST,
  FETCH_GRADES_SUCCESS,
  FETCH_GRADES_FAILURE,
} from './constants';

import { GradesService } from '../../services/gradesService';


const gradesService = new GradesService();

function* fetchGrades() {
  try {
    const { payload: grades } = yield call(() => gradesService.fetchGrades());
    console.log(grades);

    yield put({ type: FETCH_GRADES_SUCCESS, payload: grades });
  } catch (error) {
    yield put({ type: FETCH_GRADES_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* gradesSaga() {
  yield takeLatest(FETCH_GRADES_REQUEST, fetchGrades);
}
