import { createSlice, nanoid } from '@reduxjs/toolkit';

const constactsInitialState = () => {
  if (localStorage.getItem('contacts')) {
    const localStorageState = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageState.length) {
      return localStorageState;
    }
  }
  return '';
};

const constactsSlice = createSlice({
  name: 'contacts',
  initialState: constactsInitialState(),
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = constactsSlice.actions;
export const contactsReducer = constactsSlice.reducer;
