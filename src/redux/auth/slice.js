import { createSlice } from "@reduxjs/toolkit";
import {
  registerOperation,
  loginOperation,
  logout,
  refreshUser,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  loading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerOperation.pending, handlePending)
      .addCase(registerOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerOperation.rejected, handleRejected)
      .addCase(loginOperation.pending, handlePending)
      .addCase(loginOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginOperation.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
