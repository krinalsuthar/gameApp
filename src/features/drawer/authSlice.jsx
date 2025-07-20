import { createSlice } from '@reduxjs/toolkit';

const token = sessionStorage.getItem('token') || localStorage.getItem('token');
const userString = sessionStorage.getItem('user') || localStorage.getItem('user');
console.log("🚀 ~ userString:", userString)

let user = null;
try {
    user = userString ? JSON.parse(userString) : null;
    console.log("🚀 ~ user:", user)
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
            console.log("🚀 ~ user:", user)
            // Don't store here — let UI handle it based on rememberMe
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
