import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setFertilizerRequests, setLoading, setError } from "./fertilizer-request-slice";

export const getFertilizerRequestsThunk = createAsyncThunk(
    "fertilizer_request/getFertilizerRequests",
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get("/api/fertilizer-requests");
            dispatch(setFertilizerRequests(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);
