import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from '../reducers/user';

function logInAPI(loginData) {
  return axios.post('/api/user/login', loginData, {
    withCredentials: true,
  });
}

function* login(action) {
  try {
    const result = yield call(logInAPI, action.data);
    return yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    return yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function registerAPI(registerData) {
  return axios.post('/api/user', registerData);
}

function* register(action) {
  try {
    yield call(registerAPI, action.data);
    return yield put({
      type: REGISTER_SUCCESS,
    });
  } catch (e) {
    return yield put({
      type: REGISTER_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, register);
}

function logOutAPI() {
  return axios.post(
    '/api/user/logout',
    {},
    {
      withCredentials: true,
    },
  );
}

function* logOut() {
  try {
    yield call(logOutAPI);
    return yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    return yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI() {
  return axios.get('/api/user', {
    withCredentials: true,
  });
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    return yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    return yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchRegister),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
  ]);
}
