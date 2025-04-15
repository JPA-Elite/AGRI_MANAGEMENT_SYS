import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setResults, setLoading, setError } from "./search-slice";

export const searchBeneficiariesThunk = createAsyncThunk(
    "search/searchBeneficiaries",
    async (query, { dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`/api/search?query=${query}`);
            dispatch(setResults(response.data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);
