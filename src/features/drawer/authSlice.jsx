// features/drawer/authSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Check if token exists in sessionStorage (for tab-session persistence)
const token = sessionStorage.getItem('token');
const user = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
    isLoggedIn: !!token,
    user: user || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            sessionStorage.setItem('token', 'session-jwt');
            sessionStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
