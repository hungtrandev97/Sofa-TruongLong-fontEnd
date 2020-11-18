import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  createCategorySuccess,
  createCategoryFailed,
  getAllCategorySuccess,
  getAllCategoryFailed,
} from "../actions/actions";
import { apiCreateCategory, apiGetAllCategory } from "../../services/category";

function* CreateCategory({ payload }) {
  try {
    const response = yield call(apiCreateCategory, payload);
    if (response.status) {
      yield put(createCategorySuccess(response.data));
    } else {
      yield put(createCategoryFailed());
    }
  } catch (error) {
    yield put(createCategoryFailed());
  }
}

function* GetAllCategory() {
  try {
    const response = yield call(apiGetAllCategory);
    console.log(response, "check");
    if (response.status) {
      yield put(getAllCategorySuccess(response.data));
    } else {
      yield put(getAllCategoryFailed());
    }
  } catch (error) {
    yield put(getAllCategoryFailed());
  }
}

export function* watchCreateCategory() {
  yield takeEvery(CREATE_CATEGORY, CreateCategory);
}
export function* watchGetAllCategory() {
  yield takeEvery(GET_ALL_CATEGORY, GetAllCategory);
}
export default function* rootSage() {
  yield all([fork(watchCreateCategory), fork(watchGetAllCategory)]);
}
