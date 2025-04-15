import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: {
        data: [],
        total: 0
    },
    loading: false,
    error: null,
    query: ''
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
});

export const { setResults, setLoading, setError, setQuery } = searchSlice.actions;
export default searchSlice.reducer;
