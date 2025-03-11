import { createSlice } from "@reduxjs/toolkit";

export const cashAssistanceSlice = createSlice({
    name: "cash_assistance",
    initialState: {
        cash_assistances: [],
        cash_assistance: {},
    },
    reducers: {
        setCashAssistances: (state, action) => {
            state.cash_assistances = action.payload;
        },
        setCashAssistance: (state, action) => {
            state.cash_assistance = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCashAssistance, setCashAssistances } =
    cashAssistanceSlice.actions;

export default cashAssistanceSlice.reducer;
