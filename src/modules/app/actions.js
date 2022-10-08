export const APP_ACTIONS = {
  APP_FILTER_EMPLOYEES_ADD: "APP_FILTER_EMPLOYEES_ADD",
  APP_FILTER_EMPLOYEES_REMOVE: "APP_FILTER_EMPLOYEES_REMOVE",
};

export const filterEmployees = {
  addFilterEmployees: (filterBy) => ({
    type: APP_ACTIONS.APP_FILTER_EMPLOYEES_ADD,
    payload: filterBy,
  }),
  removeFilterEmployees: (filterBy) => ({
    type: APP_ACTIONS.APP_FILTER_EMPLOYEES_REMOVE,
    payload: filterBy,
  }),
};
