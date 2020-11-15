/* eslint-disable import/no-cycle */
import { all } from "redux-saga/effects";
import authSagas from "./sagas/auth.sagas";
import categorySagas from "./sagas/category.sagas";

export default function* rootSaga() {
  yield all([authSagas(), categorySagas()]);
}
