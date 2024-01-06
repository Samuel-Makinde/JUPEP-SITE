import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLogged: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload,
                state.isLogged = true
        },
        logOut: (state) => {
            state.user = null,
                state.isLogged = false
        },
    }
})

export const { login, logOut } = authSlice.actions;
export default authSlice.reducers;
