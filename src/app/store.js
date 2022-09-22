import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/UserSlice.js';

export const store = configureStore({
  reducer: {
    user:UserReducer
  }
});
