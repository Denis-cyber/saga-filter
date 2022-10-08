import { APP_ACTIONS } from "modules/app/actions";

const getInitialState = () => ({
  selectedJob: [],
});

const INITIAL_STATE = getInitialState();

const state2actionMapping = {
  [APP_ACTIONS.APP_FILTER_EMPLOYEES_ADD]: (state, action) => {
    return {
      ...state,
      selectedJob: [...state.selectedJob, action.payload],
    };
  },
  [APP_ACTIONS.APP_FILTER_EMPLOYEES_REMOVE]: (state, action) => {
    return {
      ...state,
      selectedJob: state.selectedJob.filter((item) => item !== action.payload),
    };
  },
};

export const appReducer = (state = INITIAL_STATE, action) => {
  return state2actionMapping[action.type] ? state2actionMapping[action.type](state, action) : state;
};
