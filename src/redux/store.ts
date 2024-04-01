import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './reducers';
import { State } from './state';

const store = configureStore<State>({
	reducer: filtersReducer,
});

export default store;