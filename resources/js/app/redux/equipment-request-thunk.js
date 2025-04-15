import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setEquipmentRequests, setLoading, setError } from "./equipment-request-slice";

export const getEquipmentRequestsThunk = createAsyncThunk(
    "equipment_request/getEquipmentRequests",
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get("/api/equipment-requests");
            dispatch(setEquipmentRequests(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);
