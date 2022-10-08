import camelcase from "camelcase";
import { ENDPOINTS } from "modules/api/endpoints";
import { API_ACTIONS } from "modules/api/actions";

const makeInitialState = () =>
  Object.keys(ENDPOINTS).reduce((acc, next) => {
    const inner = {
      data: [],
      isLoading: false,
      error: null,
    };

    acc[camelcase(next)] = inner;

    return acc;
  }, {});

const INITIAL_STATE = makeInitialState();

export const apiReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type.startsWith(API_ACTIONS.FETCH_START_)) {
    const inner = camelcase(type.replace(API_ACTIONS.FETCH_START_, ""));

    return {
      ...state,
      [inner]: {
        ...inner[state],
        data: [],
        isLoading: true,
        error: null,
      },
    };
  }

  if (type.startsWith(API_ACTIONS.FETCH_SUCCESS_)) {
    const inner = camelcase(type.replace(API_ACTIONS.FETCH_SUCCESS_, ""));

    return {
      ...state,
      [inner]: {
        ...inner[state],
        data: payload,
        isLoading: false,
        error: null,
      },
    };
  }

  if (type.startsWith(API_ACTIONS.FETCH_START_FAILURE_)) {
    const inner = camelcase(type.replace(API_ACTIONS.FETCH_START_FAILURE_, ""));

    return {
      ...state,
      [inner]: {
        ...inner[state],
        isLoading: false,
        error: payload,
      },
    };
  }

  return state;
};
