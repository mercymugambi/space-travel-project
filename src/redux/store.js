/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    Rockets: rocketsReducer,
  },
});

export default store;
