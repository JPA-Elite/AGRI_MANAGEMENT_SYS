import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    equipment_requests: [],
    loading: false,
    error: null
};

const equipmentRequestSlice = createSlice({
    name: "equipment_request",
    initialState,
    reducers: {
        setEquipmentRequests: (state, action) => {
            state.equipment_requests = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setEquipmentRequests, setLoading, setError } = equipmentRequestSlice.actions;
export default equipmentRequestSlice.reducer;
