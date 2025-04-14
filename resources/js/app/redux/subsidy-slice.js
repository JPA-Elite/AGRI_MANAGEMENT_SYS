import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subsidies: [],
    loading: false,
    error: null,
};

const subsidySlice = createSlice({
    name: "subsidy",
    initialState,
    reducers: {
        setSubsidies: (state, action) => {
            state.subsidies = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setSubsidies, setLoading, setError } = subsidySlice.actions;
export default subsidySlice.reducer;
