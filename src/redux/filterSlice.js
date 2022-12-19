import { createSlice } from '@reduxjs/toolkit';

const filterInitialState  = {
  value:''
};

const filterSlice = createSlice({
  name: 'contacts',
  initialState: filterInitialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.value = action.payload
      }
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
