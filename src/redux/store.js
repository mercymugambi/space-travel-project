import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/RocketsSlice';
import MissionsReducer from './missions/MissionsSlice';

const store = configureStore({
  reducer: {
    mission: MissionsReducer,
    rocket: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
