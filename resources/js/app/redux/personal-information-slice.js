import { createSlice } from '@reduxjs/toolkit'

export const personalInfomationSlice = createSlice({
  name: 'personal_information',
  initialState: {
    personal_informations:[],
    personal_information: {
      land_farmers:[
        {name:''}
      ],
      parcels:[
        {}
      ]
    },
  },
  reducers: {
    setPersonalInformations: (state,action) => {
      state.personal_informations =action.payload
    },
    setPersonalInformation: (state,action) => {
      state.personal_information =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPersonalInformation,setPersonalInformations } = personalInfomationSlice.actions

export default personalInfomationSlice.reducer