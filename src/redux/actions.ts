export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const addFilter = (filter: string) => ({
  type: ADD_FILTER,
  payload: filter,
});

export const removeFilter = (filter: string) => ({
  type: REMOVE_FILTER,
  payload: filter,
});