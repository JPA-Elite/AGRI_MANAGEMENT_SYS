import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    dashboard:{}
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    setDashboard: (state,action) => {
      state.dashboard =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment,setDashboard } = appSlice.actions

export default appSlice.reducer