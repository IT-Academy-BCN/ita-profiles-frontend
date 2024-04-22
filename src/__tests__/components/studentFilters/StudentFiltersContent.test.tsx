 // @ts-ignore
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import StudentFiltersContent from '../../../components/studentFilters/StudentFiltersContent'; 
import rootReducer from '../../../store/reducers/getUserDetail/apiGetUserDetail';
import fetchData from '../../../components/studentFilters/StudentFiltersContent';

const store = configureStore({
  reducer: rootReducer
});

describe('StudentFiltersContent', () => {
  test('renders checkboxes', () => {
    render(
      <Provider store={store}>
        <StudentFiltersContent />
      </Provider>
    );
    
	expect(screen.queryByRole("checkbox", { name: "Frontend"})).toBeInTheDocument();
    
});

test('can check the checkboxes', () => {
	render(
		<Provider store={store}>
        	<StudentFiltersContent />
      	</Provider>
    );
	
	 // @ts-ignore
	const checkboxes: HTMLInputElement | null = screen.getByRole("checkbox", { name: "Frontend" });
	expect(checkboxes).toBeInTheDocument();
	 // @ts-ignore
	fireEvent.click(checkboxes);
	 // @ts-ignore
	expect(checkboxes.checked).toEqual(true);
	 // @ts-ignore
	fireEvent.click(checkboxes);
	 // @ts-ignore
	expect(checkboxes.checked).toEqual(false);
	if (checkboxes) {
	} else {
		throw new Error("Checkbox not found");
	}
});
});