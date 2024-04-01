import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './reducers';

const store = configureStore({
	reducer: filtersReducer,
});

export default store;