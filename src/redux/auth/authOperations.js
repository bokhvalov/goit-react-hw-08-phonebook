import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = null;
  },
};

const setToken = token => axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const signUp = createAsyncThunk(
  'auth/signup',
  async (newUserData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUserData);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authorization = createAsyncThunk(
  'auth/login',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginData);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return thunkAPI.rejectWithValue('First visit - lack of token in LS');
      setToken(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unSet();
    return;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
