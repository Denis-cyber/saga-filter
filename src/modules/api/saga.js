import { takeEvery, put, all } from "redux-saga/effects";
import { apiActions, API_ACTIONS } from "modules/api/actions";
import api from "modules/api/api";

function* onApiLoad({ payload, type }) {
  const actionType = type.replace(API_ACTIONS.FETCH_START_, "").toLowerCase();

  try {
    const response = yield api.fetch(actionType, payload);

    yield put(apiActions.fetchSuccess(actionType, response));
  } catch (e) {
    yield put(apiActions.fetchFailure(actionType, e));
  }
}

function* wathApiLoad() {
  yield takeEvery((action) => action.type.startsWith(API_ACTIONS.FETCH_START_), onApiLoad);
}

export function* apiRootSaga() {
  yield all([wathApiLoad()]);
}
