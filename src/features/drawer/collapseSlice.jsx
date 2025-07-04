import { createSlice } from '@reduxjs/toolkit';

const collapseSlice = createSlice({
    name: 'collapse',
    initialState: {
        openSports: {},
        openLeagues: {},
        openCategories: true,
    },
    reducers: {
        toggleSport: (state, action) => {
            state.openSports = { ...state.openSports, [action.payload]: !state.openSports[action.payload] };
        },
        toggleLeague: (state, action) => {
            const { sport, league } = action.payload;
            state.openLeagues = { ...state.openLeagues, [`${sport}-${league}`]: !state.openLeagues[`${sport}-${league}`] };
        },
        toggleCategories: (state) => {
            state.openCategories = !state.openCategories;
        },
    },
});

export const { toggleSport, toggleLeague, toggleCategories } = collapseSlice.actions;
export default collapseSlice.reducer;