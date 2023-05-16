import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

const getRocketsData = createAsyncThunk('get/rocketsData', async () => {
  const rockets = await axios.get(ROCKETS_URL);
  return rockets.data;
});

const initialState = {
  rockets: [],
  loading: false,
  error: undefined,
};

const RocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRocketsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        const rocketsData = payload.map(({
          id, rocket_name: rocketName, description, flickr_images: images,
        }) => ({
          id,
          rocketName,
          description,
          images,
        }));
        state.rockets = rocketsData;
      })
      .addCase(getRocketsData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default RocketsSlice.reducer;
