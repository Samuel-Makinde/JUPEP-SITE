import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/authService"; // Import your login createAsyncThunk

const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        user: null,
        userRole: null,
        userId: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.userRole = null; // Reset userRole
                state.userId = null;   // Reset userId
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.userRole = action.payload.userRole;
                state.userId = action.payload.userId;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default loginSlice.reducer;
