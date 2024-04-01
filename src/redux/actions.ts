import { Student } from './state';

export const SET_STUDENTS = 'SET_STUDENTS';
export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_USER_PANEL = 'TOGGLE_USER_PANEL';


export interface SetStudentsAction {
  type: typeof SET_STUDENTS;
  payload: Student[];
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export interface ToggleUserPanelAction {
	type: typeof TOGGLE_USER_PANEL;
  }
  

export type Action = SetStudentsAction | SetFilterAction | ToggleUserPanelAction;

export const setStudents = (students: Student[]): SetStudentsAction => ({
  type: SET_STUDENTS,
  payload: students,
});

export const setFilter = (filter: string): SetFilterAction => ({
  type: SET_FILTER,
  payload: filter,
});