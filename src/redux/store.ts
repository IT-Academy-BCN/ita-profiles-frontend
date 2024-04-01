import { combineReducers } from 'redux';
import { Action, SET_STUDENTS, SET_FILTER, TOGGLE_USER_PANEL } from './actions';

function studentsReducer(state = [], action: Action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.payload;
    default:
      return state;
  }
}

function filtersReducer(state = [], action: Action) {
  switch (action.type) {
    case SET_FILTER:
      return [...state, action.payload];
    default:
      return state;
  }
}

function isUserPanelOpenReducer(state = false, action: Action) {
  switch (action.type) {
    case TOGGLE_USER_PANEL:
      return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  students: studentsReducer,
  filters: filtersReducer,
  isUserPanelOpen: isUserPanelOpenReducer,
});

export default rootReducer;