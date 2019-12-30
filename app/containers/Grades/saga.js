import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_GRADES_REQUEST,
  FETCH_GRADES_SUCCESS,
  FETCH_GRADES_FAILURE,
} from './constants';

import { GradesService } from '../../services/gradesService';


const gradesService = new GradesService();

function* fetchGrades({payload: username, role}) {
  try {
    const grades = yield call(() => gradesService.fetchGrades(username, role));
    yield put({ type: FETCH_GRADES_SUCCESS, payload: grades });
  } catch (error) {
    yield put({ type: FETCH_GRADES_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* gradesSaga() {
  yield takeLatest(FETCH_GRADES_REQUEST, fetchGrades);
}
