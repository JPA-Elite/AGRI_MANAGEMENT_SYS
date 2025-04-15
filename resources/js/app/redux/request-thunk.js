import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setRequests, setLoading, setError } from "./request-slice";

export const getAllRequestsThunk = createAsyncThunk(
    "request/getAllRequests",
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get("/api/beneficiary-requests");
            dispatch(setRequests(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);
