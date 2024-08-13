// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/Slicing';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
});
