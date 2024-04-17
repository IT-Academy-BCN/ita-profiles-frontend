import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import StudentFiltersContent from '../../../components/studentFilters/StudentFiltersContent'; 
import rootReducer from '../../../store/reducers/getUserDetail/apiGetUserDetail'; 

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
    
	expect(screen.queryByRole("checkbox")).toBeInTheDocument();
    
});

test('can check the checkboxes', () => {
	render(
		<Provider store={store}>
        <StudentFiltersContent />
      </Provider>
    );

	const checkboxes: HTMLInputElement | null = screen.queryByRole("checkbox");
	if (checkboxes) {
		expect(checkboxes).toBeInTheDocument();
		fireEvent.click(checkboxes);
		expect(checkboxes.checked).toEqual(true);
		fireEvent.click(checkboxes);
		expect(checkboxes.checked).toEqual(false);
	} else {
		throw new Error("Checkbox not found");
	}
});
});