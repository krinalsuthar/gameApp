// src/features/drawer/drawerSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        open: false,
        activeSections: ['Categories', 'Providers', 'sports', 'MATCHODDS', "BOOKMAKER", 'TOSS', 'FANCYBET'], // ✅ all default opened sections
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
        toggleSection: (state, action) => {
            const section = action.payload;
            if (state.activeSections.includes(section)) {
                state.activeSections = state.activeSections.filter((s) => s !== section); // close
            } else {
                state.activeSections.push(section); // open
            }
        },
    },
});

export const { openDrawer, closeDrawer, toggleDrawer, toggleSection } = drawerSlice.actions;
export default drawerSlice.reducer;
