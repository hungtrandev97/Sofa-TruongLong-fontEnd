import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import { apiCreateProduct, apiGetAllProduct } from "../../services/product";
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCT,
  createProductFailed,
  getAllProductFailed,
  createProductSuccess,
  getAllProductSuccess,
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

function* GetAllProduct() {
  try {
    const respose = yield call(apiGetAllProduct);
    if (respose.status) {
      yield put(getAllProductSuccess(respose.data));
    } else {
      yield put(getAllProductFailed());
    }
  } catch (error) {
    yield put(getAllProductFailed());
  }
}

export function* watchCreateProduct() {
  yield takeEvery(CREATE_PRODUCT, CreateProduct);
}

export function* watchGetAllProduct() {
  yield takeEvery(GET_ALL_PRODUCT, GetAllProduct);
}

export default function* rootSage() {
  yield all([fork(watchCreateProduct), fork(watchGetAllProduct)]);
}
