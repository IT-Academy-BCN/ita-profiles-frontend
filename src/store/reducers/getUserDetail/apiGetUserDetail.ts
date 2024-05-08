/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserPanelOpen: false,
}

const studentDetailPanel = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    openUserPanel: (state) => {
      state.isUserPanelOpen = true
    },
    closeUserPanel: (state) => {
      state.isUserPanelOpen = false
    },
  },
})
export const { openUserPanel, closeUserPanel } = studentDetailPanel.actions
export default studentDetailPanel.reducer
