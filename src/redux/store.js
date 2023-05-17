import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './missions/MissionsSlice';

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
  },
});

export default store;
