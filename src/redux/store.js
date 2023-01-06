import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
