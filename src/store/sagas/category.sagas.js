import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_CATEGORY,
  createCategorySuccess,
  createCategoryFailed,
} from "../actions/actions";
import { apiCreateCategory } from "../../services/category";

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

export function* watchCreateCategory() {
  yield takeEvery(CREATE_CATEGORY, CreateCategory);
}
export default function* rootSage() {
  yield all([fork(watchCreateCategory)]);
}
