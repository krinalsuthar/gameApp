import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from '../features/drawer/drawerSlice.jsx';
import collapseReducer from '../features/drawer/collapseSlice.jsx';
import authReducer from '../features/drawer/authSlice.jsx';
import fancyMarketsReducer from "../features/Authntication/fancyMarketsSlice.jsx"
import rawMarketDataReducer from "../features/drawer/RawDataSlice.jsx"

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        collapse: collapseReducer,
        auth: authReducer,
        fancyMarkets: fancyMarketsReducer,
        getrawMarketData: rawMarketDataReducer
    },
});
