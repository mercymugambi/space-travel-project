import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsData = createAsyncThunk('rockets/getRocketsData', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const initialState = {
  rockets: [],
  loading: false,
  error: undefined,
};

const RocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRocketsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.rockets = payload.map(({
          id,
          rocket_name: rocketName,
          description,
          flickr_images: images,
        }) => ({
          id,
          rocketName,
          description,
          images,
        }));
      })
      .addCase(getRocketsData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message;
      });
  },
});

export default RocketsSlice.reducer;
