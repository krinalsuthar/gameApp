import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from '../features/drawer/drawerSlice.jsx';
import collapseReducer from '../features/drawer/collapseSlice.jsx';
import authReducer from '../features/drawer/authSlice.jsx';

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        collapse: collapseReducer,
        auth: authReducer,
    },
});
