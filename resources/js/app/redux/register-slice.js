import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    form: {
      farm_activity:[],
      parcels:[
        {}
      ]
    },
  },
  reducers: {
    setForm: (state,actions) => {
      state.form = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setForm, } = registerSlice.actions

export default registerSlice.reducer