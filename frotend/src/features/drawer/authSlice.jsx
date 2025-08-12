import { createSlice } from '@reduxjs/toolkit';

const token = sessionStorage.getItem('token') || localStorage.getItem('token');
const userString = sessionStorage.getItem('user') || localStorage.getItem('user');

let user = null;
try {
    user = userString ? JSON.parse(userString) : null;
} catch (e) {
    console.error("Failed to parse user from storage:", e);
}

const initialState = {
    isLoggedIn: !!token,
    user: user,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            sessionStorage.clear();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
