import { State } from './state';
import { Action, SET_STUDENTS, SET_FILTER } from './actions';

const initialState: State = {
  students: [],
  filters: [],
  isUserPanelOpen: false,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
	  
    default:
      return state;
  }
}

export default reducer;