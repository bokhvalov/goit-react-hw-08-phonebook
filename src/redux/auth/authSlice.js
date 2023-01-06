import { createSlice } from '@reduxjs/toolkit';
import {
  authorization,
  getCurrentUser,
  logout,
  signUp,
} from './authOperations';

const authInitialState = {
  name: '',
  email: '',
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    //registration operations
    [signUp.pending](state) {
      state.isRefreshing = true;
    },
    [signUp.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [signUp.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },

    //login operations
    [authorization.pending](state) {
      state.isRefreshing = true;
    },
    [authorization.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [authorization.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },

    //getCurrentUser operations
    [getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [getCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },

    //logout operations
    [logout.pending](state) {
      state.isRefreshing = true;
    },
    [logout.fulfilled](state) {
      state = authInitialState;
    },
    [logout.rejected](state, action) {
      state = authInitialState;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
