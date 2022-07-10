import { configureStore } from '@reduxjs/toolkit';
import xxReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: xxReducer,
  },
});
