import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBeneficiaries, setLoading, setError } from "./beneficiary-slice";

export const getActiveBeneficiariesThunk = createAsyncThunk(
    "beneficiary/getActiveBeneficiaries",
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get("/api/beneficiaries?status=active");
            dispatch(setBeneficiaries(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);
