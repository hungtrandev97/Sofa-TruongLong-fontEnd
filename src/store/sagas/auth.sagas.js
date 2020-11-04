import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import history from "../../history";
import { ROLE } from "../../constants/DefaultValue";
import {
  LOGIN_USER,
  loginUserSuccess,
  loginUserFailed,
} from "../actions/actions";

import { apiLogin } from "../../services/auth";

function* loginWithPassword({ payload }) {
  try {
    const response = yield call(apiLogin, payload.user);
    if (response.status) {
      yield put(loginUserSuccess(response.data.user, response.data.token));
      const userRole = response.data.user.role;
      if (userRole === ROLE.ADMIN) {
        history.push("/admin");
      } else if (userRole === ROLE.CONSUMER) {
        history.push("/consumer");
      }
    } else {
      yield put(loginUserFailed());
    }
  } catch (error) {
    yield put(loginUserFailed());
  }
}

export function* watchLogoutUser() {
  yield takeEvery(LOGIN_USER, loginWithPassword);
}

export default function* rootSage() {
  yield all([fork(watchLogoutUser)]);
}