import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import { apiCreateProduct } from "../../services/product";
import {
  CREATE_PRODUCT,
  createProductFailed,
  createProductSuccess,
} from "../actions/actions";

function* CreateProduct({ payload }) {
  try {
    const response = yield call(apiCreateProduct, payload);
    if (response.status) {
      yield put(createProductSuccess(response.data));
    } else {
      yield put(createProductFailed());
    }
  } catch (error) {
    yield put(createProductFailed());
  }
}

export function* watchCreateProduct() {
  yield takeEvery(CREATE_PRODUCT, CreateProduct);
}

export default function* rootSage() {
  yield all([fork(watchCreateProduct)]);
}
