import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isUserPanelOpen: false,
    filteredStudents : []
}

const showUserInfo = createSlice({
    name: "showUserReducer",
    initialState,
    reducers: {
        toggleUserPanel: (state) => {state.isUserPanelOpen = !state.isUserPanelOpen},
        setFilteredStudents: (state, action) => {state.filteredStudents = action.payload}
    }
})
export const { toggleUserPanel, setFilteredStudents  } = showUserInfo.actions;
export default showUserInfo.reducer
