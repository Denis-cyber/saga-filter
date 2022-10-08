import { createStore, applyMiddleware, combineReducers } from "redux";
import { apiReducer } from "modules/api/reducer";
import createSagaMiddleware from "redux-saga";
import { apiRootSaga } from "modules/api/saga";
import { appReducer } from "modules/app/reducer";

const reducers = combineReducers({
  api: apiReducer,
  app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(apiRootSaga);
