import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    beneficiaries: [],
    loading: false,
    error: null
};

const beneficiarySlice = createSlice({
    name: "beneficiary",
    initialState,
    reducers: {
        setBeneficiaries: (state, action) => {
            state.beneficiaries = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setBeneficiaries, setLoading, setError } = beneficiarySlice.actions;
export default beneficiarySlice.reducer;
