import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setSubsidies, setLoading, setError } from "./subsidy-slice";

export const getSubsidiesThunk = createAsyncThunk(
    "subsidy/getSubsidies",
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get("/api/subsidies");
            dispatch(setSubsidies(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const approveSubsidyThunk = createAsyncThunk(
    "subsidy/approveSubsidy",
    async (id, { dispatch }) => {
        try {
            await axios.put(`/api/subsidies/${id}/approve`);
            dispatch(getSubsidiesThunk());
        } catch (error) {
            throw error;
        }
    }
);
