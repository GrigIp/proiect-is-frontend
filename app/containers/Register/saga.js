import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from "./constants";
import { takeLatest, call, put } from 'redux-saga/effects';
import authService from '../../services/authService';

function *register({ payload }){
  try{
    const { response } = yield call( () =>
        authService.register(payload)
    );

    yield put( { type: REGISTER_SUCCESS, payload: response });
  } catch (error) {
    yield put( { type: REGISTER_FAILURE, payload: error.message });
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
}
