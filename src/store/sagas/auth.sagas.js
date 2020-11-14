import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import history from "../../history";
import { ROLE } from "../../constants/DefaultValues";

import {
  LOGIN_USER,
  loginUserSuccess,
  loginUserFailed,
  LOGOUT_USER,
  logoutUserSuccess,
  logoutUserFailed,
} from "../actions/actions";
import { apiLogin } from "../../services/auth";

function* loginWithPassword(payload) {
  console.log(payload, "check");
  try {
    const response = yield call(apiLogin, payload);
    console.log(response, "reacascs");
    if (response.status) {
      yield put(loginUserSuccess(response.data.user, response.data.token));
      const userRole = response.data.user.role;
      if (userRole === ROLE.ADMIN) {
        history.push("/admin");
      } else if (userRole === ROLE.PATIENT) {
        history.push("/");
      } else {
        history.push("/");
      }
    } else {
      yield put(loginUserFailed());
    }
  } catch (error) {
    yield put(loginUserFailed());
  }
}

function* logout() {
  try {
    yield put(logoutUserSuccess());
  } catch (error) {
    yield put(logoutUserFailed());
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithPassword);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export default function* rootSage() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser)]);
}
