import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isUserPanelOpen: false,
}

const showUserInfo = createSlice({
  name: 'showUserReducer',
  initialState,
  reducers: {
    toggleUserPanel: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isUserPanelOpen = !state.isUserPanelOpen
    },
  },
})
export const { toggleUserPanel } = showUserInfo.actions
export default showUserInfo.reducer
