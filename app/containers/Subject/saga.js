import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_SUBJECT_REQUEST,
  FETCH_SUBJECT_SUCCESS,
  FETCH_SUBJECT_FAILURE,
} from './constants';
import { SubjectService } from '../../services/subjectService';
import { UserService } from '../../services/userService';
import {createProfessorSubject, createStudentSubject} from "../../utils/utils";

const userService = new UserService();
const subjectService = new SubjectService();

function* fetchSubject({ payload: role }) {
  try {
    let  data;

    if (role === 'PROFESSOR') {
       let { payload: { teach_list: profData }}  = yield call(() => userService.fetchUser());

       data =  profData.map(elem =>  createProfessorSubject(elem) );
       data = _.uniqWith(data, _.isEqual);
    } else {
       let { payload: studData } = yield call(() => subjectService.fetchSubject());
       studData.map((elem) => delete elem.id);

       data = studData.map((elem) => createStudentSubject(elem));
    }

    yield put({ type: FETCH_SUBJECT_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_SUBJECT_FAILURE, payload: error.message });
  }
}

// Individual exports for testing
export default function* groupSaga() {
  yield takeLatest(FETCH_SUBJECT_REQUEST, fetchSubject);
}
