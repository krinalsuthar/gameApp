import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        selectedCategory: null,
    },
    reducers: {
        setCategoryData: (state, action) => {
            state.selectedCategory = action.payload;
        },
        clearCategoryData: (state) => {
            state.selectedCategory = null;
        },
    },
});

export const { setCategoryData, clearCategoryData } = categorySlice.actions;
export default categorySlice.reducer;