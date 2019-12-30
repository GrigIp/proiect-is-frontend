import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_GROUP_REQUEST,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from './constants';
import { GroupService } from '../../services/groupService';
import { StudentsService } from "../../services/studentsService";

const groupService = new GroupService();
const studentsService = new StudentsService();

function* fetchGroupByUsername({payload: username}) {
  try {
    const group = yield call(() => groupService.fetchGroupByUsername(username));
    yield put({ type: FETCH_GROUP_SUCCESS, payload: group });
  } catch (error) {
    yield put({ type: FETCH_GROUP_FAILURE, payload: error.message });
  }
}

function* fetchStudentsByGroupId({ payload: id }) {
  try {
    const students = yield call(() => studentsService.fetchStudentsByGroupId(id));

    yield put({ type: FETCH_STUDENTS_SUCCESS, payload: students });
  } catch (error) {
    yield put({ type: FETCH_STUDENTS_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* groupsListViewSaga() {
  yield takeLatest(FETCH_GROUP_REQUEST, fetchGroupByUsername);
  yield takeLatest(FETCH_STUDENTS_REQUEST, fetchStudentsByGroupId);
}
