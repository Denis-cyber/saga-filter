export const API_ACTIONS = {
  FETCH_START_: "FETCH_START_",
  FETCH_SUCCESS_: "FETCH_SUCCESS_",
  FETCH_START_FAILURE_: "FETCH_START_FAILURE_",
};

export const apiActions = {
  fetch: (endpoint, payload) => ({
    type: `${API_ACTIONS.FETCH_START_}${endpoint.toUpperCase()}`,
    payload,
  }),
  fetchSuccess: (endpoint, payload) => ({
    type: `${API_ACTIONS.FETCH_SUCCESS_}${endpoint.toUpperCase()}`,
    payload,
  }),
  fetchFailure: (endpoint, payload) => ({
    type: `${API_ACTIONS.FETCH_START_FAILURE_}${endpoint.toUpperCase()}`,
    payload,
  }),
};
