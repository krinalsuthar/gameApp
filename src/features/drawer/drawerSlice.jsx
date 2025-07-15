// // src/features/drawer/drawerSlice.jsx
// import { createSlice } from '@reduxjs/toolkit';

// const drawerSlice = createSlice({
//     name: 'drawer',
//     initialState: {
//         open: false,
//         activeSections: ['Categories', 'Providers', 'sports', 'MATCHODDS', "BOOKMAKER", 'TOSS', 'FANCYBET'],
//         count: 0,
//         favouriteItems: {},
//     },
//     reducers: {
//         openDrawer: (state) => {
//             state.open = true;
//         },
//         closeDrawer: (state) => {
//             state.open = false;
//         },
//         toggleDrawer: (state) => {
//             state.open = !state.open;
//         },
//         toggleSection: (state, action) => {
//             const section = action.payload;
//             if (state.activeSections.includes(section)) {
//                 state.activeSections = state.activeSections.filter((s) => s !== section); // close
//             } else {
//                 state.activeSections.push(section); // open
//             }
//         },
//         toggleFavorite: (state, action) => {
//             const id = action.payload;
//             state.favouriteItems[id] = !state.favouriteItems[id];
//             state.count += state.favouriteItems[id] ? 1 : -1;
//         },
//     },
// });

// export const { openDrawer, closeDrawer, toggleDrawer, toggleSection, toggleFavorite } = drawerSlice.actions;
// export default drawerSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Initialize state from localStorage
const getInitialFavoriteState = () => {
    const savedItems = localStorage.getItem('favouriteItems');
    const savedCount = localStorage.getItem('favoriteCount');
    return {
        favouriteItems: savedItems ? JSON.parse(savedItems) : {},
        count: savedCount ? parseInt(savedCount, 10) : 0,
    };
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        open: false,
        activeSections: ['Categories', 'Providers', 'sports', 'MATCHODDS', "BOOKMAKER", 'TOSS', 'FANCYBET'],
        ...getInitialFavoriteState(),
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
        toggleFavorite: (state, action) => {
            const id = action.payload;
            state.favouriteItems[id] = !state.favouriteItems[id];
            state.count += state.favouriteItems[id] ? 1 : -1;
        },
    },
});

export const { openDrawer, closeDrawer, toggleDrawer, toggleSection, toggleFavorite } = drawerSlice.actions;
export default drawerSlice.reducer;