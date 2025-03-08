import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users:[]
  },
  reducers: {
    setUsers: (state,actions) => {
      state.users = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsers, } = userSlice.actions

export default userSlice.reducer