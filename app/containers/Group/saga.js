import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_GROUP_REQUEST,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
} from './constants';
import { GroupService } from '../../services/groupService';

const groupService = new GroupService();

function* fetchGroup() {
  try {
    const { payload: group } = yield call(() => groupService.fetchGroup());

    yield put({ type: FETCH_GROUP_SUCCESS, payload: group });
  } catch (error) {
    yield put({ type: FETCH_GROUP_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* groupSaga() {
  yield takeLatest(FETCH_GROUP_REQUEST, fetchGroup);
}
