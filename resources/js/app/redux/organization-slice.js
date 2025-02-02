import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, } = appSlice.actions

export default appSlice.reducer