import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import { ROLE } from "../../constants/DefaultValues";
import {
  apiLogin,
  apiGetAllAccountAdmin,
  apiGetAllAcountCustomer,
} from "../../services/auth";

import {
  LOGIN_USER,
  loginUserSuccess,
  loginUserFailed,
  LOGOUT_USER,
  logoutUserSuccess,
  logoutUserFailed,
  GET_ALL_ACCOUNT_ADMIN,
  registerAdminSuccess,
  getAllAcountAdminFailed,
  GET_ALL_ACCOUNT_CUSTOMER,
  registerConsumerSuccess,
  getAllAcountCustomerFailed,
} from "../actions/actions";

function* loginWithPassword({ payload }) {
  try {
    const response = yield call(apiLogin, payload);
    if (response.status) {
      yield put(loginUserSuccess(response.data.user, response.data.token));
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
  } catch (error) {
    yield put(logoutUserFailed());
  }
}
function* GetAllAcountAdmin() {
  try {
    const response = yield call(apiGetAllAccountAdmin);
    if (response.status) {
      yield put(registerAdminSuccess(response));
    } else {
      yield put(getAllAcountAdminFailed());
    }
  } catch (error) {
    yield put(getAllAcountAdminFailed());
  }
}

function* GetAllAcountCustomer() {
  try {
    const response = yield call(apiGetAllAcountCustomer);
    if (response.status) {
      yield put(registerConsumerSuccess(response));
    } else {
      yield put(getAllAcountCustomerFailed());
    }
  } catch (error) {
    yield put(getAllAcountCustomerFailed());
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithPassword);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}
export function* watchGetAllAccountAdmin() {
  yield takeEvery(GET_ALL_ACCOUNT_ADMIN, GetAllAcountAdmin);
}
export function* watchGetAllAcountCustomer() {
  yield takeEvery(GET_ALL_ACCOUNT_CUSTOMER, GetAllAcountCustomer);
}
export default function* rootSage() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchGetAllAccountAdmin),
    fork(watchGetAllAcountCustomer),
  ]);
}
