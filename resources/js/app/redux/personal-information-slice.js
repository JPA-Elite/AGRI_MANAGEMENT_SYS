import { createSlice } from '@reduxjs/toolkit'

export const personalInfomationSlice = createSlice({
  name: 'personal_information',
  initialState: {
    personal_information: {},
  },
  reducers: {
    setPersonalInformation: (state,action) => {
      state.personal_information =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPersonalInformation, } = personalInfomationSlice.actions

export default personalInfomationSlice.reducer