import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fertilizer_requests: [],
    loading: false,
    error: null
};

const fertilizerRequestSlice = createSlice({
    name: "fertilizer_request",
    initialState,
    reducers: {
        setFertilizerRequests: (state, action) => {
            state.fertilizer_requests = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setFertilizerRequests, setLoading, setError } = fertilizerRequestSlice.actions;
export default fertilizerRequestSlice.reducer;
