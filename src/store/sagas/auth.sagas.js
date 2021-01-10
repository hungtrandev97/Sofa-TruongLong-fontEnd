import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import { ROLE } from "../../constants/DefaultValues";
import { apiLogin } from "../../services/auth";

import {
  LOGIN_USER,
  loginUserSuccess,
  loginUserFailed,
  LOGOUT_USER,
  logoutUserSuccess,
  logoutUserFailed,
  updateInfor,
} from "../actions/actions";

function* loginWithPassword({ payload }) {
  try {
    const response = yield call(apiLogin, payload);
    if (response.status) {
      yield put(loginUserSuccess(response.data.user, response.data.token));
      const dataInfor = {
        name_customer: `${response.data.user.userName}`,
        Address_Customer: `${response.data.user.address}`,
        Phone_Customer: `${response.data.user.numberPhone}`,
      };
      yield put(updateInfor(dataInfor));
      const userRole = response.data.user.role;
      if (userRole === ROLE.ADMIN) {
        window.location.href = "/admin";
      } else if (userRole === ROLE.PATIENT) {
        window.location.href = "/trang-chu";
      } else {
        window.location.href = "/";
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
    window.location.href = "/trang-chu";
  } catch (error) {
    yield put(logoutUserFailed());
    window.location.href = "/trang-chu";
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
