import { takeLatest, call, put } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./constants";
import authService from '../../services/authService';

function *authorize({ payload }){
  try{
    const { token } = yield call(() =>
      authService.authorize(payload),
    );

    yield put({ type: AUTH_SUCCESS, payload: token });
  } catch (error) {
    yield put({ type: AUTH_FAILURE, payload: error.message });
  }
}

export default function* singInSaga() {
  yield takeLatest(AUTH_REQUEST, authorize);
}
