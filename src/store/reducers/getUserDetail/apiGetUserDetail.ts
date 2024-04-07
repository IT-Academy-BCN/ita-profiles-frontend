
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isUserPanelOpen: false,
}

const showUserInfo = createSlice({
    name: "showUserReducer",
    initialState,
    reducers: {
        toggleUserPanel: (state) => {state.isUserPanelOpen = !state.isUserPanelOpen}
    }
})
export const { toggleUserPanel } = showUserInfo.actions;
export default showUserInfo.reducer
