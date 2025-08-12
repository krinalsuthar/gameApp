// features/fancyMarketsSlice.js
import { createSlice } from "@reduxjs/toolkit";
const rawMarketData = createSlice({
    name: "getrawMarketData",
    initialState: {
        data: null,
    },
    reducers: {
        setRawMarketData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setRawMarketData } = rawMarketData.actions;
export default rawMarketData.reducer;
