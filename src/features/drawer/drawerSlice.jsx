// src/features/drawer/drawerSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        open: false,
    },
    reducers: {
        openDrawer: (state) => {
            state.open = true;
        },
        closeDrawer: (state) => {
            state.open = false;
        },
        toggleDrawer: (state) => {
            state.open = !state.open;
        },
        handleOptions: (state) => {
            state.open = !state.open
        }
    },
});

export const { openDrawer, closeDrawer, toggleDrawer, handleOptions } = drawerSlice.actions;
export default drawerSlice.reducer;
