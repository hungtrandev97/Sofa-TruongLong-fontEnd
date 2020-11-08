import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers/reducers";
import sagas from "./sagas";
import middlewares from "./middlewares/middlewares";

import { persistedState, saveState } from "./persisted.store";

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

export default function configureStore() {
  const store = createStore(
    reducers,
    persistedState, // second argument overrides the initial state
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  // add a listener that will be invoked on any state change
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
}
