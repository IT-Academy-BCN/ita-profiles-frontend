import { ADD_FILTER, REMOVE_FILTER } from './actions';

interface Action {
	type: string;
	payload: string;
  }

const filtersReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.payload];
    case REMOVE_FILTER:
      return state.filter(filter => filter !== action.payload);
    default:
      return state;
  }
};

export default filtersReducer;