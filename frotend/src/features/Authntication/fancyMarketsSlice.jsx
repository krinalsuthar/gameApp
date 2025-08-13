import { createSlice } from "@reduxjs/toolkit";

const fancyMarketsSlice = createSlice({
    name: "fancyMarkets",
    initialState: {
        data: null,
        isLoading: false, // Add isLoading state
        error: null, // Optional: for error handling
    },
    reducers: {
        setFancyMarkets: (state, action) => {
            state.data = action.payload;
            state.isLoading = false; // Reset loading when data is set
            state.error = null; // Clear error
        },
        setLoading: (state) => {
            state.isLoading = true; // Set loading state
        },
        setError: (state, action) => {
            state.isLoading = false; // Reset loading on error
            state.error = action.payload; // Set error
        },
    },
});

export const { setFancyMarkets, setLoading, setError } = fancyMarketsSlice.actions;
export default fancyMarketsSlice.reducer;