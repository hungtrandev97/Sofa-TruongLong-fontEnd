/* eslint-disable import/no-cycle */
import { all } from "redux-saga/effects";
import authSagas from "./sagas/auth.sagas";

export default function* rootSaga() {
  yield all([authSagas()]);
}
