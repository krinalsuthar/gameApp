// features/fancyMarketsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const fancyMarketsSlice = createSlice({
    name: "fancyMarkets",
    initialState: {
        data: null,
    },
    reducers: {
        setFancyMarkets: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setFancyMarkets } = fancyMarketsSlice.actions;
export default fancyMarketsSlice.reducer;
