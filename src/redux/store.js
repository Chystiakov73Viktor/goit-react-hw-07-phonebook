import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';

export const store = configureStore({
  reducer: {
    users: contactsReducer,
    filter: filterReducer,
  },
});
