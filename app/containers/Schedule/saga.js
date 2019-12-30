import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_SCHEDULE_REQUEST,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE,
} from './constants';
import { ScheduleService } from '../../services/scheduleService';

const scheduleService = new ScheduleService();

function* fetchSchedule({ payload: username, role}) {
  try {
    const schedule = yield call(() => scheduleService.fetchSchedule(username, role));
    yield put({ type: FETCH_SCHEDULE_SUCCESS, payload: schedule });
  } catch (error) {
    yield put({ type: FETCH_SCHEDULE_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* scheduleSaga() {
  yield takeLatest(FETCH_SCHEDULE_REQUEST, fetchSchedule);
}
