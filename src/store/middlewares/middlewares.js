import createSagaMiddleware from "redux-saga";
import settings from "./settings.middleware";

const sagaMiddleware = createSagaMiddleware();

export default [sagaMiddleware, settings];
