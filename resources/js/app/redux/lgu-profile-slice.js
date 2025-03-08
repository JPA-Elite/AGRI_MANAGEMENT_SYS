import { createSlice } from '@reduxjs/toolkit'

export const lguProfileSlice = createSlice({
  name: 'aluProfile',
  initialState: {
    profile: {},
  },
  reducers: {
    setProfile: (state,action) => {
      state.profile =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProfile, } = lguProfileSlice.actions

export default lguProfileSlice.reducer