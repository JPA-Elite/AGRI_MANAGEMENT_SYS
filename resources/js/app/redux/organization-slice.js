import { createSlice } from "@reduxjs/toolkit";

export const organizationSlice = createSlice({
    name: "organizations",
    initialState: {
        organizations: [],
    },
    reducers: {
        setOrganizations: (state, action) => {
            state.organizations = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setOrganizations } = organizationSlice.actions;

export default organizationSlice.reducer;
